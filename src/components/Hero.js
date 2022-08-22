import InfoDisplay from './InfoDisplay';

const Hero = ({

  onChangeIp, 
  onSubmit,
  formInputIp,

  ip, location,timezone,isp,

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
                    placeholder="Search for any IP address"
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
            />
        </div>
    </section>
  )
}

export default Hero