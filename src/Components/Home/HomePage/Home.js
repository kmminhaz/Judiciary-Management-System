import React from 'react';
import AboutBangladesh from '../AboutBangladesh/AboutBangladesh';
import ImageSlider from '../Image-Slider/ImageSlider';
import NewsReport from '../NewsReport/NewsReport';
import NoticeAndSite from '../NoticeAndSites/NoticeAndSite';
import './Home.css';


const Home = () => {
    return (
      <div className='text-white'>
        <ImageSlider></ImageSlider>
        <NoticeAndSite></NoticeAndSite>
        <AboutBangladesh></AboutBangladesh>
        <NewsReport></NewsReport>
      </div>
    );
};

export default Home;