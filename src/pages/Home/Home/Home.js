import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import HomeBike from '../HomeBike/HomeBike';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeBike></HomeBike>
            <AboutUs></AboutUs>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;