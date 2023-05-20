// import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="background bannerImg  relative">
            <div className='ml-10 p-8 bg-gradient-to-r from-black to-transparent inline-block'>
                <h3 className='text-3xl font-bold text-white '>Find your </h3>
                <h1 className='text-7xl text-yellow-400 font-CreteRound font-extrabold'>Favourite CAR</h1>
                <p className='text-white w-1/2'>The different types of toy cars that you sell, such as classic cars, modern sports cars, police cars, trucks, and buses.</p>
                <button className="btn btn-warning text-white my-1 ">Explore cars</button>
            </div>
        </div>
    );
};

export default Banner;