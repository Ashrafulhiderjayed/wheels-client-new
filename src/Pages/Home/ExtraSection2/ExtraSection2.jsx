import React from 'react';
import { FaMoneyCheck, FaShippingFast,FaStarHalfAlt } from 'react-icons/fa';

const ExtraSection2 = () => {
        return(
            <div>
        <h1 className="text-center text-primary font-extrabold text-7xl sm:text-4xl my-10 p-2 font-CreteRound">Why Choose US?</h1>
            <div className="carousel rounded-box flex justify-between">
                <div className="carousel-item">
                    <div className=" w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                        <div className='text-center mx-auto ml-36'>
                            <FaStarHalfAlt className='text-center text-6xl text-red-500'></FaStarHalfAlt>
                        </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">QUALITY AND SAVING</h2>
                            <p>Comprehensive quality control and affordable prices</p>
                        </div>
                    </div>  
                </div> 
                <div className="carousel-item">
                    <div className=" w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                        <div className='text-center mx-auto ml-36'>
                            <FaMoneyCheck className='text-center text-6xl text-red-500'></FaMoneyCheck>
                        </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">PAYMENT SECURITY</h2>
                            <p>More than 10 different secure payment methods</p>
                        </div>
                    </div> 
                </div> 
                <div className="carousel-item">
                <div className=" w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                        <div className='text-center mx-auto ml-36'>
                            <FaShippingFast className='text-center text-6xl text-red-500'></FaShippingFast>
                        </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">FAST SHIPPING</h2>
                            <p>Fast and convenient door to door delivery</p>
                        </div>
                    </div> 
                </div> 
            </div>
        </div>
        
    );
};

export default ExtraSection2;