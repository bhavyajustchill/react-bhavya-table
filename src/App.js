import React, { useState, useEffect } from "react";
import "./App.css";
import BhavyaTable from "./components/BhavyaTable";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";

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
          <h1>No Data Available</h1>
        )}
      </div>
    </>
  );
}

export default App;
