import React, { useState } from "react";

export default function WeatherTemperature(props) {
	const [unit, setUnit] = useState("fahrenheit");

	function showCelsius(event) {
		event.preventDefault(event);
		setUnit("celsius");
	}

	function showFahrenheit(event) {
		event.preventDefault(event);
		setUnit("fahrenheit");
	}

	if (unit === "fahrenheit") {
		return (
			<div className="WeatherTemperature">
				<span className="current-temperature">{Math.round(props.fahrenheit)}</span>
				<span className="current-temperature-unit">
					°F |{" "}
					<a href="/" onClick={showCelsius}>
						°C
					</a>
				</span>
			</div>
		);
	} else {
		let celsius = ((props.fahrenheit - 32) * 5) / 9;
		return (
			<div className="WeatherTemperature">
				<span className="current-temperature">{Math.round(celsius)}</span>
				<span className="current-temperature-unit">
					<a href="/" onClick={showFahrenheit}>
						°F
					</a>{" "}
					| °C
				</span>
			</div>
		);
	}
}
