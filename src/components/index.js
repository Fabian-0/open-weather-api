import React from "react";
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import {faMapMarked} from '@fortawesome/free-solid-svg-icons';
import {faCloud} from '@fortawesome/free-solid-svg-icons';
import '../assets/css/App.css';

function Index() {

	let history = useHistory();

	// Functions to manage the obtain data options

	const handlerAuto = () => history.push('/weather-auto');
  const handlerManual = () => history.push('/weather-manual');

	return(
		<div className="locationPermiss">
			<section className="locationPermiss__center">
				<h1 className="locationPermiss__title" ><FontAwesomeIcon icon={faCloud} /> Welcon to <a href="https://openweathermap.org/" target="_blank" className="locationPermiss__linkAPI">OpenWeatherMap</a> API <FontAwesomeIcon icon={faCloud} /></h1>
				<div className="locationPermiss__optionPosition">
					<FontAwesomeIcon className="locationPermiss__icon" icon={faMapMarkedAlt} />
					<p className="locationPermiss__text">Allow access to location</p>
					<button className="locationPermiss__btn" onClick={handlerAuto}>Ask permission</button>
				</div>
				<div className="locationPermiss__optionPosition">
					<FontAwesomeIcon className="locationPermiss__icon" icon={faMapMarked} />
					<p className="locationPermiss__text">Enter location manually</p> 
					<button onClick={handlerManual} className="locationPermiss__btn">Automatic detection</button>
				</div>
			</section>
		</div>
	);
}

export default Index;