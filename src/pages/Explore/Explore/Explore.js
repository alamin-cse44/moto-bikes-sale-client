import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AvailableBikes from '../AvailableBikes/AvailableBikes';
import ExploreHeader from '../ExploreHeader/ExploreHeader';
import Footer from '../../Shared/Footer/Footer';

const Explore = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <>
        <Navigation></Navigation>
        <ExploreHeader date={date} setDate={setDate}></ExploreHeader>
        <AvailableBikes date={date}></AvailableBikes>
        <Footer></Footer>
        </>
    );
};

export default Explore;