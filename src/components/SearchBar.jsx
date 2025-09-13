import { Search, Sun, Moon } from "lucide-react";

function SearchBar({
  query,
  suggestions,
  handleInputChange,
  handleSearch,
  darkMode,
  setDarkMode,
}) {
  return (
    <div className="flex flex-col items-center gap-2 mb-2 relative">
      {/* Input + icons row */}
      <div className="flex justify-center items-center ml-4 gap-3">
        <div className="relative w-65 md:w-80">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search city..."
            className="p-3 pr-10 rounded-full w-full border-0 bg-gray-300 dark:bg-gray-700 text-black dark:text-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-0"
          />
          <button
            onClick={() => handleSearch(query)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-black dark:text-gray-300"
          >
            <Search size={20} />
          </button>
        </div>

        {/* Dark/Light toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 shadow"
        >
          {darkMode ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-gray-800" />
          )}
        </button>
      </div>

      {/* Suggestions dropdown */}
      {suggestions.length > 0 && (
        <ul className="bg-white dark:bg-gray-800 shadow rounded-lg w-80 absolute top-14 z-10">
          {suggestions.map((s, i) => (
            <li
              key={i}
              onClick={() => handleSearch(s)}
              className="p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white"
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
