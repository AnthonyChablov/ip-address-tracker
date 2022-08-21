import InfoDisplay from './InfoDisplay';

const Hero = ({

  onChangeIp, 
  onSubmit,
  formInputIp,
  setFormInputIp,

  ip, location,timezone,isp,longitude,latitude,coordinates,

}) => {
  return (
    <section className='hero'>
        <div className="container">
            <h1 className="hero__header">IP Address Tracker</h1>
            <form 
              className="hero__form" 
              action="input"
              onSubmit={onSubmit}
            >
                <input 
                    className="form__control" 
                    id='ip'
                    type="text" 
                    name='input-text'
                    placeholder="Search for any IP address or domain"
                    value = {formInputIp}
                    onChange= {onChangeIp}
                    required
                />
                <button className="hero__btn btn"
                type="submit">&gt;</button>
            </form>

            <InfoDisplay
              ip = {ip}
              location = {location}
              timezone = {timezone}
              isp = {isp}
              longitude = {longitude}
              latitude = {latitude}
              coordinates = {coordinates}
            />
            
        </div>
    </section>
  )
}

export default Hero