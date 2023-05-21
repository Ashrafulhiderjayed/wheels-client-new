// import React from 'react';

import Banner from "../Banner/Banner";
import ExtraSection2 from "../ExtraSection2/ExtraSection2";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import OffSale from "../OffSale/OffSale";
import UserReview from "../UserReview/UserReview";

const Home = () => {
    return (
        <div >
            <div className="mx-auto px-4 max-w-7xl">
                <Banner></Banner>
                <Gallery></Gallery>
                {/* <OffSale></OffSale> */}
                <ExtraSection2></ExtraSection2>
                <UserReview></UserReview>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;