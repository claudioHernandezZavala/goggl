import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-api31.p.rapidapi.com";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("js mastery");

  const getResults = async (type, query,body) => {
    setIsLoading(true);

      const url = `${baseUrl}${type}`;
      console.log(url)
      
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '7b1b086ca5msh0b4a71f02af90f2p15dc0djsn1ce43776273f',
          'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
        },
      
        body:body
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json()
        setResults(data)

      } catch (error) {
        console.error(error);
      }
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
