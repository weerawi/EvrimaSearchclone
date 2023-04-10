import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-2 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-300 dark:bg-red-800 bg-rose-100 ">
      <div className="flex justify-between  items-center space-x-5 w-screen ">
        <Link to="/">
          <p className="text-2xl bg-red-800 font-bold text-white py-1 px-2 rounded dark:bg-rose-100 dark:text-gray-900">
            Evrima
          </p>
        </Link>

        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl dark:bg-rose-100 text-white dark:text-gray-900 bg-gray-800 border rounded-full px-2 py-1 hover:shadow-xl"
        >
          {darkTheme ? "💡Light" : "🌙 Dark"}
        </button>
      </div>
    </div>
  );
};
