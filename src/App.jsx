import React from "react";
import Survey_form from "./Components/Survey_form/Survey_form";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Scorecard from "./Components/Scorecard/Scorecard";
import { useState,useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert("some error")
    }
  };


  return (
    <>
      <div className=" mx-auto custom bg-orange-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Survey_form/>} />
          <Route path="/scorecard" element={<Scorecard />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App;
