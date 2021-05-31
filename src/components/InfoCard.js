import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faCloud,
  faThermometerThreeQuarters,
} from "@fortawesome/free-solid-svg-icons";
import { toCelsius } from "../helpers/helpers";
import '../assets/css/InfoCard.css';

function InfoCard({weatherInfo}) {

  const { location, temp, sky, icon, windSpeed, clouds, pressure } = weatherInfo;
  const [grades, setGrades] = useState(true);

	// transform Fahrenheit grades to Celcius grades
	const celsius = toCelsius(temp);

  return(
    <section className="weatherInfo">
			<div className="weatherInfo__center">
				<h2 className="weatherInfo__title">Weather App</h2>
				<p className="weatherInfo__cityName">{location}</p>
				<div className="weatherInfo__data">
					<div className="weatherInfo__data-iconAndDegrees weatherInfo__dataMiddle">
						<img src={icon} alt={icon} />
						<p className="weatherInfo__data-degrees">{(grades) ? `${temp} °F` : `${celsius} °C`}</p>
					</div>
					<div className="weatherInfo__data-watherData weatherInfo__dataMiddle">
						<p className="weatherInfo__data-textStyle weatherInfo__data-sky"><span> {sky}</span></p>
						<p className="weatherInfo__data-textStyle weatherInfo__data-wintSpeed"><span><FontAwesomeIcon icon={faWind} /> Wind Speed	:</span> {windSpeed}</p>
						<p className="weatherInfo__data-textStyle weatherInfo__data-cluods"><span><FontAwesomeIcon icon={faCloud} /> Clouds	:</span> {clouds}</p>
						<p className="weatherInfo__data-textStyle weatherInfo__data-pressure"><span><FontAwesomeIcon icon={faThermometerThreeQuarters} /> Pressure	:</span> {pressure}</p>
					</div>
				</div>
				<button className="weatherInfo__button" onClick={() => setGrades(!grades)}>DEGREES °F/°C</button>
			</div>
		</section>
  );
}

export default InfoCard;