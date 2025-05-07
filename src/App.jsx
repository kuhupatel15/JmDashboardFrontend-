import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Center from './Components/Center';
import HumseMiliye from './Components/NavbarChild/HamseMiliye';
import KhabarPalika from './Components/NavbarChild/KhabarPalika';
import MantriSantri from './Components/NavbarChild/MantriSantri';
import YahBhiPadhiye from './Components/NavbarChild/YahBhiPadhiye';
import CourtKachheri from './Components/NavbarChild/CourtKachheri';
import Anukarniya from './Components/NavbarChild/Anukarniya';
import ApnaMP from './Components/NavbarChild/ApnaMP';
import Footer from './Footer';


const App = () => {
  return (
    <Router>
      <div className="w-100vw bg-white font-[gilroy]">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Center />} />
          <Route path="/humse-miliye" element={<HumseMiliye />} />
          <Route path="/khbar-palika" element={<KhabarPalika />} />
          <Route path="/mantri-santri" element={<MantriSantri />} />
          <Route path="/yah-bhi-padhiye" element={<YahBhiPadhiye />} />
          <Route path="/court-kachahri" element={<CourtKachheri />} />
          <Route path="/anukarniya" element={<Anukarniya />} />
          <Route path="/apna-mp" element={<ApnaMP />} />

          {/* Add more routes here */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
