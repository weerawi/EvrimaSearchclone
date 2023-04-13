import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search83.p.rapidapi.com/google";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Elon Musk");

  const getResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      //   params: { query: "word cup", gl: "us", lr: "en", num: "10", start: "0" },
      headers: {
        "X-RapidAPI-Key": "3bc20d10f9mshf0058a643705654p1d134fjsn3bb269506390",
        "X-RapidAPI-Host": "google-search83.p.rapidapi.com",
      },
    });

    const data = await response.json();
    console.log({ type, data });
    if (type.includes("/news")) {
      setResults(data.entries);
    } else if (type.includes("/images")) {
      setResults(data.image_results);
    } else {
      setResults(data.results);
    }

    setResults(data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
