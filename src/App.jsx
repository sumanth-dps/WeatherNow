
import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

function App() {
  const [city, setCity] = useState("London");
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const fetchWeather = async (cityName) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod !== 200) return;
      setWeather(data);

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const forecastData = await forecastRes.json();
      if (forecastData.cod === "200") setForecast(forecastData.list);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWeather("London");
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      fetch(
        `https://api.openweathermap.org/data/2.5/find?q=${value}&appid=${API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.list) setSuggestions(data.list.map((c) => c.name));
        });
    } else setSuggestions([]);
  };

  const handleSearch = (cityName) => {
    setCity(cityName);
    fetchWeather(cityName);
    setSuggestions([]);
    setQuery("");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <Header />
      <SearchBar
        query={query}
        suggestions={suggestions}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <div className="p-6 flex flex-col items-center">
        <CurrentWeather weather={weather} />
        <HourlyForecast forecast={forecast} />
        <DailyForecast forecast={forecast} />
      </div>
    </div>
  );
}

export default App;
