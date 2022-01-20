import { Component } from 'react'
import './App.css'
import Forecast from './components/static/forecast'
import Form from './components/static/form'
import Heading from './components/static/heading'

export default class App extends Component {
	state = {
		city: '',
		country: '',
		humidity: '',
		temperature: '',
		pressure: '',
		icon: '',
		description: '',
		error: ''
	}
	render(){
		return (
			<div className="App">
				<Heading/>
				<Form loadWeather={this.getWeather}/>
				<Forecast data={this.state}/>
			</div>
		)		
	}

	getWeather = async e => {
		e.preventDefault()
		const city = e.target.elements.city.value
		const country = e.target.elements.country.value
		if(!city || !country) {
			this.setState({ error: 'All fields are required!' })
			return
		}
		const call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_APIKEY}&units=metric`)

		const res = await call.json()
		this.setState({
			city: res.name,
			country: res.sys.country,
			humidity: res.main.humidity,
			temperature: res.main.temp,
			pressure: res.main.pressure,
			icon: res.weather[0].icon,
			description: res.weather[0].description,
		})
	}

}

