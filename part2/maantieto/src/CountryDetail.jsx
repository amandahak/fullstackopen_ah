import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryDetail = ({ country }) => {
  //sää tilatiedoille
  const [weather, setWeather] = useState(null);
  //API-avain haetaan
  const api_key = import.meta.env.VITE_SOME_KEY; 

  useEffect(() => {
    if (country) {
      const { capital } = country; //pääkaupunki säätä varten
      if (capital) {
        //API-pyyntö
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital[0]}&appid=${api_key}`)
          .then(response => setWeather(response.data))
          .catch(error => console.error('Error fetching weather data:', error));
      }
    }
  }, [country, api_key]);

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Languages: {Object.values(country.languages).join(', ')}</p>
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} width="100" />
      {weather && (
        <div>
          <h3>Weather in {country.capital ? country.capital[0] : 'N/A'}</h3>
          <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div> //Kelvinistä celciukseen, sääkuvaus
      )}
    </div>
  );
};

export default CountryDetail;
