import { motion, AnimatePresence } from "framer-motion";
import getWeatherEmoji from "../utils/getWeatherEmoji";

function CurrentWeather({ weather }) {
  return (
    <AnimatePresence mode="wait">
      {weather && (
        <motion.div
          key={weather.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-2xl shadow-xl text-center text-white
                     bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600
                     dark:from-cyan-700 dark:via-sky-800 dark:to-blue-900
                     mb-6 w-80"
        >
          <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
          <div className="text-5xl">
            {getWeatherEmoji(weather.weather[0].main)}
          </div>
          <p className="text-3xl font-bold">
            {Math.round(weather.main.temp)}°C
          </p>
          <p className="capitalize">{weather.weather[0].description}</p>
          <p className="mt-2">💨 {weather.wind.speed} m/s</p>
          <p>💧 {weather.main.humidity}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CurrentWeather;
