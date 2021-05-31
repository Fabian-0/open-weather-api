import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import InfoCard from './InfoCard';
import Loading from './Loading';
import { handlerError } from '../helpers/helpers';

function WeatherManual () {	

	const [weatherData, setWeatherData] = useState(null);
	let history = useHistory();

	useEffect(() => {
		// Call Api that get the ip
		fetch("https://api.ipify.org/?format=json").then(res => res.json())
		.then(res => {
			console.log(res);
			// Call api to obtain weather data
			const { ip } = res;
			fetch(`http://api.weatherapi.com/v1/current.json?key=3daca7c5fff1442085c31533210702&q=${ip}`)
			.then(res => res.json())
			.then(res => {
				const current = res.current;
				// create data and set the new state
				const data = {
					location: res.location.tz_id,
					temp: current.temp_f,
					sky: current.condition.text,
					icon: current.condition.icon,
					windSpeed: `${current.wind_kph} km/h`,
					clouds: current.cloud,
					pressure: current.pressure_mb
				};
				setWeatherData(data);
			})
			.catch(err => handlerError(history))
		})
		.catch(err => handlerError(history))
	},[]);

	return(
		<>
			{ (weatherData) ?
				<InfoCard weatherInfo={weatherData} /> : 
				<Loading />
			}
		</>
	);
}

export default WeatherManual;