import React, { useState, useEffect } from 'react';
import './Weather.css';

function Weather() {


	const [temperature, setTemperature] = useState(null);
	const [city, setCity] = useState("");


	const API_KEY = "7374aa5adb246a388fffadddd35d42a1";
	const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;




	const fetchWeather = async () => {
		try {
			const response = await fetch(API_URL);
			const data = await response.json();
			setTemperature(data.main.temp);
		} catch (error) {
			console.error("Error fetching weather data:", error);
		}
	};
	useEffect(() => {
		if (city) {
			fetchWeather();
		}

	}, [city]);

	const handleCityChange = (event) => {
		setCity(event.target.value);
	};

	const handleCitySubmit = (event) => {
		event.preventDefault();
		if (city) {
			fetchWeather();
		}
	};

	const clearInput = () =>{
		setCity('')
		setTemperature(null)
	}

	return (<div>

		<div className='weatherContainer'>
			<h1 className='WTitle'>Get Your City Weather</h1>
				<input
				className='WInput'
					type='text'
					id="city"
					placeholder='Enter City'
					value={city}
					onChange={handleCityChange}
					onSubmit={handleCitySubmit}
					required
				/>
				<span className="WclearIcon" onClick={clearInput}>&times;</span>
			{temperature !== null ? (
				<p className='WResult'>Temperature: {temperature}°C</p>
			) : (
				<p className='WResult'>Please enter a valid city</p>
			)}
		</div>
	</div>)
}

export default Weather;
