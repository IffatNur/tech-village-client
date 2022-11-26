import React from 'react';
import Advertised from '../Products/Advertised';
import Navbar from '../Shared/Navbar';
import About from './About/About';
import Banner from './Banner/Banner';
import Category from './Category/Category';

const Home = () => {
    //banner
    //categories
    //advertise
    //contact section
    //footer
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Advertised></Advertised>
            <About></About>
        </div>
    );
};

export default Home;