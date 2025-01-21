import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Contact from './components/Contact';
import AboutPage from './pages/AboutPage';
import YouthGuilds from './pages/YouthGuilds';
import MainGov from './pages/MainGov';
import FamilyApo from './pages/FamilyApo';
import ContactPage from './pages/ContactPage';
import EventCalendar from './components/EventCalender';
import SpecialEvents from './pages/SpecialEvents';
import SocCom from './pages/SocCom';
import Sections from './pages/Sections';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about/AboutPage" element={<AboutPage />} />
        <Route path="/about/YouthGuilds" element={<YouthGuilds />} />
        <Route path="/about/MainGov" element={<MainGov />} />
        <Route path="/about/FamilyApo" element={<FamilyApo />} />
        <Route path="/contact/ContactPage" element={<ContactPage />} />
        <Route path="/events/SpecialEvents" element={<SpecialEvents />} />
        <Route path="/events/SocCom" element={<SocCom />} />
        <Route path="/contact/Sections" element={<Sections/>} />
        

      </Routes>
      <Footer />
     <EventCalendar />
     
    </Router>
  );
}

export default App;
