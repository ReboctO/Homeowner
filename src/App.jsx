import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Announcements from "./pages/Announcements";
import Billing from "./pages/Billing";
import Facilities from "./pages/Facilities";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/facilities" element={<Facilities />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
