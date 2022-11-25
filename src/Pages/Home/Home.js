import React from 'react';
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
            <About></About>
        </div>
    );
};

export default Home;