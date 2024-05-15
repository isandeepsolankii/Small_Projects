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
	return (<div>

		<div>
			<h1>Weather App</h1>
			<form onSubmit={handleCitySubmit}>
				<label htmlFor="city">Enter City: </label>
				<input
					type='text'
					id="city"
					placeholder='Enter City'
					value={city}
					onChange={handleCityChange}
					required
				/>
			</form>
			{temperature !== null ? (
				<p>Temperature: {temperature}°C</p>
			) : (
				<p>Please enter a valid city</p>
			)}
		</div>
	</div>)
}

export default Weather;
