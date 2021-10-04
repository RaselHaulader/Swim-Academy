import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner py-5 text-center d-flex align-items-center justify-content-center">
            <div>
                <h2 className="mt-5">Swimming</h2>
                <h1 className=" text-uppercase text-center fw-bolder">a healthy acitivity for our health</h1>
                <p className="text-center w-75 mx-auto">Swimming is a healthy activity that you can continue for a lifetime. It is a low-impact activity for physical and mental health</p>
                <button className="btn border text-white my-3 px-5 mb-5">Read More</button>
            </div>
        </div>
    );
};

export default Banner;