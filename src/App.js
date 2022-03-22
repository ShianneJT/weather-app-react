import Weather from "./Weather";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<h1>Weather Search</h1>
				<Weather />
				<div className="text-center">
					<a href="https://github.com/ShianneJT/weather-app-react" target="_blank" rel="noreferrer">
						Open-source code
					</a>{" "}
					by Shianne Taylor.
				</div>
			</div>
		</div>
	);
}
