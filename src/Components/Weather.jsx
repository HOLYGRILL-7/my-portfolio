// src/components/Weather.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ lat, lon }) => {
  const [weather, setWeather] = useState(null);
  const API_KEY = "9425598b5f95339e08ee0b7b5d3870ce"; // You can put this in .env later

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        setWeather(response.data);
      } catch (err) {
        console.error("Error fetching weather:", err);
      }
    };

    fetchWeather();
  }, [lat, lon]);

  if (!weather) return <p>Loading weather...</p>;

   const localDate = new Date((weather.dt + weather.timezone) * 1000);
  const formattedDate = localDate.toLocaleDateString();
  const formattedTime = localDate.toLocaleTimeString();

  return (
    <div className="font-semibold text-4xl space-y-2">
      <h2 className=" ">{weather.name}</h2>
       <p className="text-black "> {formattedDate}</p>
      <p className="text-black "> {formattedTime}</p>
      {/* <p>{weather.weather[0].main} - {weather.weather[0].description}</p>
      <p>🌡️ Temp: {weather.main.temp}°C</p>
      <p>💧 Humidity: {weather.main.humidity}%</p> */}
    </div>
  );
};

export default Weather;
