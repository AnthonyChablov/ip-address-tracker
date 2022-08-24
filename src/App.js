import {useState, useEffect} from 'react'
import './App.css';
import Hero from './components/Hero';
import { MapContainer, Marker, Popup, TileLayer, useMap,  ZoomControl} from 'react-leaflet';
import {ToastContainer, toast, Zoom, Bounce} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // Hooks //
  const [ip, setIp]= useState(' ');
  const [location,setLocation] = useState(` `);
  const [timezone,setTimeZone] = useState(` `);
  const [isp,setIsp] = useState(' ');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [formInputIp, setFormInputIp] = useState('');

  useEffect(()=>{
    console.log(`new ip :${ip}, fetching location`);
    getLocation();
  }, [ip, latitude]);

  useEffect(()=>{
    fetchUserIpAddress();
  }, []);

  // functions
  const fetchUserIpAddress =async ()=> {
    const res = await fetch("https://geolocation-db.com/json/");
    const data = await res.json();
    console.log(data.IPv4);
    setIp(data.IPv4);
  }

  const fetchLocation = async()=>{
    const res = await fetch(`https://ipwho.is/${ip}`,{
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    if(!res.ok){
      console.log('something went wrong');
    }
    const data = await res.json();
    console.log(data);
    return data;
  }
  
  const getLocation = async()=>{
    const data = await fetchLocation();
    setTimeZone(`UTC${data.timezone.utc}`);
    setLocation(`${data.city},${data.region}`);
    setIsp(data.connection.isp);
    setLatitude(data.latitude);
    setLongitude(data.longitude);
    setCoordinates([data.latitude,data.longitude])
  }

  // form state changes and submit to make new fetch request
  const onChangeHandlerIp = (e)=>{
    e.preventDefault();
    setFormInputIp(e.target.value);
  }
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    setIp(formInputIp);
  }

  const MyComponent = ()=>{
    const map = useMap();
    const mapCenter = map.getCenter();
    console.log(`map center: ${mapCenter}`);
    map.flyTo(coordinates, 12);
    
    return(
      <Marker position={coordinates}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  
  
  return (
  <body>
    
    
    <Hero 
      onChangeIp = {onChangeHandlerIp}
      onSubmit = {onSubmitHandler}
      formInputIp={formInputIp}
      setFormInputIp={setFormInputIp}

      ip = {ip}
      location = {location}
      timezone = {timezone}
      isp = {isp}
      longitude = {longitude}
      latitude = {latitude}
      coordinates = {coordinates}
    />
    <ToastContainer/>
    {
      latitude && (
        
          <MapContainer
            className='map'
            center={
              { lat: latitude, lng: longitude }
            }
            zoom={13}
            zoomControl={false}
            scrollWheelZoom={false}
            style={{ height:"72vh" }} 
          >
            <TileLayer    
              attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
              url={`https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=${'uxvh9L9qGcEE5OCfKS21'}`}
            />
            <MyComponent/>
            <ZoomControl position='bottomright' />
          </MapContainer>
        
      )
    }
  </body>
  );
}
export default App;
