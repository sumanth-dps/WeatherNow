const getWeatherEmoji = (weather) => {
  if (!weather) return "❓";
  const w = weather.toLowerCase();
  if (w.includes("cloud")) return "☁️";
  if (w.includes("rain")) return "🌧️";
  if (w.includes("thunder")) return "⛈️";
  if (w.includes("snow")) return "❄️";
  if (w.includes("clear")) return "☀️";
  if (w.includes("mist") || w.includes("fog")) return "🌫️";
  return "🌍";
};

export default getWeatherEmoji;
