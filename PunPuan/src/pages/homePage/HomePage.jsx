import React from 'react';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import Home from '../../components/home/home';
import Slider from '../../components/slider/slider';
import FAQ from '../../components/faq/FAQ';
import Contact from '../../components/contact/Contact';
import './homePage.css'
// import Styles from '../../Styles/homePage.module.css'


const HomePage = () => {
  return (
    <main className='main'>
      <Home />
      <Filter />
      <Card />
      <Slider />
      <div className="last container">
        <FAQ />
        <Contact />
      </div>
      {/* <div className={Styles.h1h1}>
        <h1>Hello</h1>
      </div> */}
    </main>
  );
};



export default HomePage;
