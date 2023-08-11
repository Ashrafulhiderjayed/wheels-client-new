// import React from 'react';
import './Banner.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Banner = () => {

    useEffect(() => {
        AOS.init({duration: 2000});
      }, [])

    return (
        <div className="background bannerImg relative overflow-y-hidden">
            <div className='ml-10 p-8 bg-gradient-to-r from-black to-transparent inline-block' data-aos="fade-left">
                <h3 className='text-3xl font-bold text-white '>Find your </h3>
                <h1 className='text-7xl text-yellow-400 font-CreteRound font-extrabold'>Favourite CAR</h1>
                <p className='text-white w-1/2'>The different types of toy cars that you sell, such as classic cars, modern sports cars, police cars, trucks, and buses.</p>
                <button className="btn btn-warning text-white my-1" data-aos='fade-up'>Explore cars</button>
            </div>
        </div>
    );
};

export default Banner;