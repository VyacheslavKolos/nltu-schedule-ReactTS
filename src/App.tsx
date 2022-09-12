import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Header} from "./components";

function App() {
  return (
    <div className="App">
          <Header/>


        <Routes>
            {/*<Route path="/" element={<Home />} />*/}
            {/*<Route path="about" element={<About />} />*/}
        </Routes>
    </div>
  );
}

export default App;
