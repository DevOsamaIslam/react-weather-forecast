const Form = props => {
	return (
		<form onSubmit={props.loadWeather}>
			<input type='text' name='country' placeholder='Please enter your country..' />
			<input type='text' name='city' placeholder='Please enter the name of your city..'/>
			<button>Get Weather</button>
		</form>
	)
}

export default Form