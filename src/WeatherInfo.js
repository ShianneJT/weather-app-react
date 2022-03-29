import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<div className="container mt-3">
				<div className="row">
					<div className="col">
						<div className="current-temperature-container d-flex">
							<WeatherIcon code={props.data.icon} size={40} />
							<WeatherTemperature fahrenheit={props.data.temperature} />

							<div>
								<ul className="pt-3">
									<li>Humidity: {props.data.humidity}%</li>
									<li>Wind: {Math.round(props.data.wind)} mph</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="location-information">
							<span className="city">{props.data.city}</span>
							<ul>
								<li>
									<FormattedDate date={props.data.date} />
								</li>
								<li className="text-capitalize">{props.data.description}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
