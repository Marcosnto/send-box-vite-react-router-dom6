import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from "./components/Home";
import { About } from "./components/About";
import "./styles/global.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Menu />
    </BrowserRouter>
  </React.StrictMode>
);
