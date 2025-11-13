import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/main.scss"; // Import your main SCSS once
import RoomsPage from "./pages/Rooms/Rooms";
import RoomDetails from "./pages/RoomDetails/RoomDetails";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Booking from "./pages/Booking/Booking";
import { useTranslation } from "react-i18next";


function App() {

  const { i18n } = useTranslation();

  // Toggle direction based on language
  const currentDir = i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <div dir={currentDir}>
    <Router>
            <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/rooms/:slug" element={<RoomDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>} />
        <Route path="/booking" element={<Booking />} />



        {/* other routes */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;