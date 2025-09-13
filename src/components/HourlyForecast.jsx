import { motion } from "framer-motion";
import getWeatherEmoji from "../utils/getWeatherEmoji";

function HourlyForecast({ forecast }) {
  return (
    <>
      <h3 className="text-lg font-semibold mb-2 dark:text-white self-start px-4">
        Next 24 Hours
      </h3>
      <div className="flex gap-3 overflow-x-auto pb-4 w-full px-4 scrollbar-thin">
        {forecast.slice(0, 24).map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            className="flex-shrink-0 w-24 p-3 rounded-xl shadow text-center
                       bg-gradient-to-br from-blue-200 to-purple-200
                       dark:from-blue-700 dark:to-purple-800 text-black dark:text-white"
          >
            <p>{new Date(f.dt * 1000).getHours()}:00</p>
            <div className="text-2xl">{getWeatherEmoji(f.weather[0].main)}</div>
            <p>{Math.round(f.main.temp)}°C</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default HourlyForecast;
