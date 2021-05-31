import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import InfoCard from './InfoCard';
import Loading from './Loading';
import { handlerError, auxKelvin } from '../helpers/helpers';

function WeatherAuto() {

  const [weatherData, setWeatherData] = useState(null);
  let history = useHistory();

  const succes = ({coords}) => {
			// Call api to obtain weather data
    const {latitude, longitude} = coords;
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclu=hourly,daily,minutely&appid=b5aab50b53a1396f7a28cb8abcc94cad`)
      .then(response => response.json())
      .then(response => {
				// create data and set the new state
        const data = {
					location: response.timezone,
					temp: auxKelvin(response.current.temp),
					sky: response.current.weather[0].description,
					icon: `http://openweathermap.org/img/wn/${response.current.weather[0].icon}@2x.png`,
					windSpeed: `${response.current.wind_speed} m/s`,
					clouds: response.current.clouds,
					pressure: response.current.pressure
				};
        setWeatherData(data);
      })
      .catch(err => handlerError(history));
    return;
  }
  
  useEffect(() => {
    // wait location permission
    navigator.geolocation.getCurrentPosition(succes, () => handlerError(history));
  }, []);

  return(
    <>
      {(weatherData) ? 
        <InfoCard weatherInfo={weatherData} /> :
        <Loading />
      }
    </>
  );
}

export default WeatherAuto;