import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screns/Home";
import AdForm from "./screns/AdForm";
import AdDetailPage from "./screns/AdDetailPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/AdForm" element={<AdForm />} />
          <Route path="/AdDetailPage:userId" element={<AdDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
