import React from 'react';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import Home from '../../components/home/Home';
import Slider from '../../components/slider/slider';
import FAQ from '../../components/faq/FAQ';
<<<<<<< HEAD
import Contact from '../../components/contact/Contact';
import '../../Styles/homePage.css'
=======
import Comment from '../../components/comment/Comment'
import './homePage.css'
// import Styles from '../../Styles/homePage.module.css'

>>>>>>> master

const HomePage = () => {
  return (
    <main className='main'>
      <Home />
      <Filter />
      <Card />
      <Slider />
      <div className="last container">
        <FAQ />
        <Comment />
      </div>
      {/* <div className={Styles.h1h1}>
        <h1>Hello</h1>
      </div> */}
    </main>
  );
};



export default HomePage;
