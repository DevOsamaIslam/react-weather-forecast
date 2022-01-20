const Forecast = ({ data }) => {
	let {
		city,
		country,
		temperature,
		humidity,
		pressure,
		icon,
		description,
		error
	} = data
	if(!city || !country) return ''
	return(
		<div className="forecast">
			<p>Place: {city}{','} {country}</p>
			<p>temperature: {temperature} C</p>
			<p>Humidity: {humidity}</p>
			<p>Pressure: {pressure}</p>
			<img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
			<p>{description}</p>
			{error && <p>{error}</p>}
		</div>
	)
}

export default Forecast