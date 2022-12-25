import React from 'react';

import './App.css';

import {Route, Routes} from "react-router-dom";
import {Header} from "./components";
import Session from "./components/Session";
import Schedule from "./components/Schedule";
import {Box} from "@mui/material";

function App() {
  return (
    <Box className="App" >
          <Header/>

        <Routes>
            <Route path="/" element={<Schedule />} />
            <Route path="/session" element={<Session />} />

        </Routes>
    </Box>
  );
}

export default App;
