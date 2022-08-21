
const InfoDisplay = ({
    ip, location,timezone,isp,longitude,latitude,coordinates,
}) => {
  return (
    <section className='info'>
        <div className='info__ip info__item'>
            <h2 className='ip__header info__header'>
                IP ADDRESS
            </h2>
            <p className='ip__ip-address info__data'>{ip}</p>
        </div>
        <div className="info__location info__item">
            <h2 className='info__header location__header'>LOCATION</h2>
            <p className='location__ info__data'>{location}</p>
        </div>
        <div className="info__timezone info__item">
            <h2 className='info__header'>TIMEZONE</h2>
            <p className='info__data'>{timezone}</p>
        </div>
        <div className="info__isp info__item">
            <h2 className='info__header'>ISP</h2>
            <p className='info__data'>{isp}</p>
        </div>
    </section>
  )
}

export default InfoDisplay