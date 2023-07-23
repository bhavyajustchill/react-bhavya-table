import React, { useState, useEffect } from "react";
import "./App.css";
import BhavyaTable from "./components/BhavyaTable";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const baseURL = "https://jsonplaceholder.typicode.com/albums";
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setData(response.data);
        setIsDataFetched(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [baseURL]);
  return (
    <>
      <div className="container">
        {isDataFetched === true ? (
          <BhavyaTable data={data}></BhavyaTable>
        ) : (
          <h1>Loading Data...</h1>
        )}
      </div>
    </>
  );
}

export default App;
