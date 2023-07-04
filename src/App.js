import React, { useState, useEffect } from "react";
import "./App.css";
import BhavyaTable from "./components/BhavyaTable";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className="container">
        {data.length > 0 ? <BhavyaTable data={data}></BhavyaTable> : <h1>No Data Available</h1>}
      </div>
    </>
  );
}

export default App;

