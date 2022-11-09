import React from 'react';

import './App.css';

import {Route, Routes} from "react-router-dom";
import {Header} from "./components";
import Session from "./components/Session";
import Schedule from "./components/Schedule";

function App() {
  return (
    <div className="App">
          <Header/>

        <Routes>
            <Route path="/" element={<Schedule />} />
            <Route path="/session" element={<Session />} />

        </Routes>
    </div>
  );
}

export default App;
