import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';

import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from './pages/homePage/HomePage';
import AboutPage from './pages/aboutPage/AboutPage';
// import TenantRegister from './pages/tenant/TenantRegister';
// import LandlordRegister from './pages/landlord/LandlordRegister';
import Footer from './components/footer/Footer';
import ViewPage from './pages/viewPage/ViewPage'
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import Register from './pages/Register/Register';
import ContactPage from './pages/contactPage/ContactPage';

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/viewPage" element={<ViewPage />} />
        {/* Add more routes here */}
        {/* <Route path="/register/tenant" element={<TenantRegister />} /> */}
        {/* <Route path="/register/landlord" element={<LandlordRegister />} /> */}

        <Route path="/register/:role" element={<Register />} />
        <Route path="/contactPage" element={<ContactPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
