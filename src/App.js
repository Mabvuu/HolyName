import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Events from './Events/Events';
import Contact from './components/Contact';
import MainGov from './pages/MainGov';
import FamilyApo from './pages/FamilyApo';
import ContactPage from './pages/ContactPage';
import EventCalendar from './components/EventCalender';
import SpecialEvents from './pages/SpecialEvents';
import Footer from './components/Footer';
import Chemwoyo from './pages/cMwoyo';
import ChaMariya from './pages/chaMariya';
import AgnesAloisGuild from './pages/agnesandalois';
import MoyoMusandeGuild from './pages/Musande';
import SoccomPage from './pages/soccomm';
import CatechesisPage from './pages/catechisis';
import CCRPage from './pages/CCRPage';
import EnglishChoir from './pages/Choir';
import ParachuteRegiment from './sections/parachuteregime';
import AvondaleWestSection from './sections/avondalew';
import BloomingdaleSection from './sections/bloomingdale';
import MeyrickParkSection from './sections/meyrick';
import CotswoldHillsSection from './sections/costwold';
import MabelreignCentralSection from './sections/Malbereign';
import HaigParkSection from './sections/haig';
import ChoirShona from './pages/choirshona';
import VaticanPage from './Events/Vatican';
import GalleryPage from './Gallery/GalleryPage';



function App() {
  return (
    <Router basename="/HolyName">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about/MainGov" element={<MainGov />} />
        <Route path="/about/FamilyApo" element={<FamilyApo />} />
        <Route path="/contact/ContactPage" element={<ContactPage />} />
        <Route path="/events/SpecialEvents" element={<SpecialEvents />} />
        <Route path="/about/soccom" element={<SoccomPage/>} />
        <Route path="/about/AboutPage/chemwoyo" element={<Chemwoyo/>} />
        <Route path="/about/AboutPage/chaMariya" element={<ChaMariya/>} />
        <Route path="/about/agnesandalois" element={<AgnesAloisGuild/>} />
        <Route path="/about/Musande" element={<MoyoMusandeGuild/>} />
        <Route path="/about/catechisis" element={<CatechesisPage/>} />
        <Route path="/about/ccr" element={<CCRPage />} />
        <Route path="/about/choir" element={<EnglishChoir />} />
        <Route path="/about/choirshona" element={<ChoirShona/>} />
        <Route path="/sections/parachuteregime" element={<ParachuteRegiment />} />
        <Route path="/sections/avondalew" element={<AvondaleWestSection />} />
        <Route path="/sections/bloom" element={<BloomingdaleSection />} />
        <Route path="/sections/meyrick" element={<MeyrickParkSection />} />
        <Route path="/sections/costwold" element={<CotswoldHillsSection />} />
        <Route path="/sections/malbereign" element={<MabelreignCentralSection/>} />
        <Route path="/sections/haig" element={<HaigParkSection/>} />
        <Route path="/events/vatican" element={<VaticanPage/>} />
        <Route path="/gallery" element={<GalleryPage/>} />
        

      </Routes>
      <Footer />
     <EventCalendar />
     
    </Router>
  );
}

export default App;
