import React from "react";
import "./Weather.css";
// import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
	const defaults = {
		icon: "RAIN",
		color: "#091e42",
		size: "40px",
		animate: true,
	};
	// const [city, setCity] = useState("");
	// const [weather, setWeather] = useState("");
	// const [loaded, setLoaded] = useState(false);

	// function displayWeather(response) {
	// 	setLoaded(true);
	// 	setWeather({
	// 		temperature: Math.round(response.data.main.temp),
	// 		description: response.data.weather[0].description,
	// 		humidity: response.data.main.humidity,
	// 		wind: response.data.wind.speed,
	// 		icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
	// 	});
	// }

	// function handleSubmit(event) {
	// 	event.preventDefault();
	// 	let apiKey = "cee89d2ce28328a0b51ee85c0d36674d";
	// 	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
	// 	axios.get(apiUrl).then(displayWeather);
	// }

	// function updateCity(event) {
	// 	setCity(event.target.value);
	// }

	// let form = (
	// 	<form onSubmit={handleSubmit}>
	// 		<input type="search" onChange={updateCity} placeholder="Type a city..." />
	// 		<input className="btn btn-primary" type="submit" value="Search"></input>
	// 	</form>
	// );

	// if (loaded) {
	// 	return (
	// 		<div>
	// 			{form}
	// 			<ul>
	// 				<li>Temperature: {weather.temperature}°C</li>
	// 				<li>Description: {weather.description}</li>
	// 				<li>Humidity: {weather.humidity}%</li>
	// 				<li>Wind: {weather.wind} km/h</li>
	// 				<li>
	// 					<img src={weather.icon} alt={weather.description} />
	// 				</li>
	// 			</ul>
	// 		</div>
	// 	);
	// } else {
	// 	return <div>{form}</div>;
	// }
	return (
		<div className="Weather p-3">
			<form>
				<div className="row">
					<div className="col-9">
						<input type="search" placeholder="Enter a city..." className="form-control" />
					</div>
					<div className="col-3">
						<input type="submit" value="Search" className="btn btn-primary w-100 pl-0" />
					</div>
				</div>
			</form>

			<div className="container mt-3">
				<div className="row">
					<div className="col">
						<div className="current-temperature-container d-flex">
							<div>
								<ReactAnimatedWeather
									icon={defaults.icon}
									color={defaults.color}
									size={defaults.size}
									animate={defaults.animate}
								/>
								<span className="current-temperature">42</span>
								<span className="current-temperature-units">°F | °C</span>
							</div>

							<div>
								<ul className="pt-3">
									<li>Precipitation: 1%</li>
									<li>Humidity: 46%</li>
									<li>Wind: 15 mph</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="location-information">
							<span className="city">Salt Lake City</span>
							<ul>
								<li>Last Updated: Monday 6:00 PM</li>
								<li>Rain</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
