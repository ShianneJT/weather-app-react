import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
// import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);
	function handleResponse(response) {
		console.log(response.data);
		setWeatherData({
			ready: true,
			city: response.data.name,
			temperature: response.data.main.temp,
			humidity: response.data.main.humidity,
			wind: response.data.wind.speed,
			description: response.data.weather[0].description,
			date: new Date(response.data.dt * 1000),
		});
	}

	const defaults = {
		icon: "RAIN",
		color: "#091e42",
		size: "40px",
		animate: true,
	};

	function search() {
		let apiKey = "cee89d2ce28328a0b51ee85c0d36674d";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleCityChange(event) {
		setCity(event.target.value);
	}

	if (weatherData.ready) {
		return (
			<div className="Weather p-3">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-9">
							<input
								type="search"
								placeholder="Enter a city..."
								className="form-control"
								onChange={handleCityChange}
							/>
						</div>
						<div className="col-3">
							<input type="submit" value="Search" className="btn btn-primary w-100 pl-0" />
						</div>
					</div>
				</form>
				<WeatherInfo data={weatherData} />
			</div>
		);
	} else {
		search();
		return "Loading...";
	}
}
