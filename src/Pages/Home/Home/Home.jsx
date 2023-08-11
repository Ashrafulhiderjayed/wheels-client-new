// import React from 'react';

import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import ExtraSection2 from "../ExtraSection2/ExtraSection2";
// import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
// import OffSale from "../OffSale/OffSale";
import UserReview from "../UserReview/UserReview";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import SignUp10 from "../SignUp10/SignUp10";

const Home = () => {
    return (
        <div >
            <Helmet>
                <title>WHEELS | Home</title>
            </Helmet>
            <div className="mx-auto px-4 max-w-7xl">
                <Banner></Banner>
                <Gallery></Gallery>
                {/* <OffSale></OffSale> */}
                <ShopByCategory></ShopByCategory>
                <ExtraSection2></ExtraSection2>
                <SignUp10></SignUp10>
                <UserReview></UserReview>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;