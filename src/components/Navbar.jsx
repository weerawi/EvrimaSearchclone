import React from "react";
import { Link } from "react-router-dom";
import { Search } from "../components/Search";

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-2 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-300 dark:bg-red-800 bg-rose-100 ">
      {/* first basic row of navbar  */}
      <div className="flex justify-between  items-center space-x-5 w-screen ">
        <Link to="/">
          {/* Logo name and image */}
          <div className="flex flex-row">
            <p className="text-2xl bg-red-800 font-bold text-white py-1 px-2 rounded dark:bg-rose-100 dark:text-gray-900">
              Evrima
            </p>
            <img
              className="h-8 w-auto"
              alt="image"
              src="../assets/everima.png"
            />
          </div>
        </Link>

        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl dark:bg-rose-100 text-white dark:text-gray-900 bg-gray-800 border rounded-full px-2 py-1 hover:shadow-xl"
        >
          {darkTheme ? "💡Light" : "🌙 Dark"}
        </button>
      </div>

      {/* advance row of navbar */}
      <Search />
    </div>
  );
};
