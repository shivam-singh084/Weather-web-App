import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { Typography } from "@mui/material";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async (city) => {
    try {
      setError("");
      setWeatherInfo(null);

      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; // 🔑 REQUIRED
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

      const res = await fetch(URL);
      const data = await res.json();

      // ❗ IMPORTANT CHECK
      if (data.cod !== 200) {
        throw new Error(data.message);
      }

      setWeatherInfo({
        city: data.name,
        temp: data.main.temp,
        humidity: data.main.humidity,
        weather: data.weather[0].description,
      });
    } catch (err) {
      setError("❌ City not found or API issue");
    }
  };

  return (
    <>
      <SearchBox updateInfo={getWeather} />

      {error && (
        <Typography color="error" mt={2}>
          {error}
        </Typography>
      )}

      <InfoBox info={weatherInfo} />
    </>
  );
}

