import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';

import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from './pages/homePage/HomePage';
import AboutPage from './pages/aboutPage/AboutPage';
import TenantRegister from './pages/tenant/TenantRegister';
import LandlordRegister from './pages/landlord/LandlordRegister';
import Footer from './components/footer/Footer';
import ViewPage from './pages/viewPage/ViewPage'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/viewPage" element={<ViewPage />} />
        {/* Add more routes here */}
        <Route path="/register/tenant" element={<TenantRegister />} />
        <Route path="/register/landlord" element={<LandlordRegister />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
