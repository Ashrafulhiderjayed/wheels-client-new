// import React from 'react';

import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import OffSale from "../OffSale/OffSale";
import UserReview from "../UserReview/UserReview";

const Home = () => {
    return (
        <div >
            <div className="mx-auto px-4 max-w-7xl">
                <Gallery></Gallery>
                <OffSale></OffSale>
                <UserReview></UserReview>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;