import { motion } from "framer-motion";
import getWeatherEmoji from "../utils/getWeatherEmoji";

function DailyForecast({ forecast }) {
  return (
    <>
      <h3 className="text-lg font-semibold mb-2 dark:text-white self-start px-4">
        Next 5 Days
      </h3>
      <div className="flex gap-3 overflow-x-auto pb-4 w-full px-4 scrollbar-thin">
        {forecast
          .filter((_, i) => i % 8 === 0)
          .slice(0, 7)
          .map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="flex-shrink-0 w-28 p-4 rounded-xl shadow text-center
                         bg-gradient-to-br from-green-200 to-yellow-200
                         dark:from-green-700 dark:to-yellow-700 text-black dark:text-white"
            >
              <p>
                {new Date(f.dt * 1000).toLocaleDateString("en-US", {
                  weekday: "short",
                })}
              </p>
              <div className="text-2xl">
                {getWeatherEmoji(f.weather[0].main)}
              </div>
              <p>{Math.round(f.main.temp)}°C</p>
            </motion.div>
          ))}
      </div>
    </>
  );
}

export default DailyForecast;
