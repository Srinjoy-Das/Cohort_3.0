import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <div className="h-screen p-2 flex flex-col gap-2">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="detail" element={<Detail />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
