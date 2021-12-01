import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner py-5  d-flex align-items-center ">
            <div className="mx-5">
                <h2 className="mt-5">Swimming</h2>
                <h1 className=" text-uppercase  fw-bolder">A healthy acitivity </h1>
                <p className=" w-75">Swimming is a healthy activity <br/> that you can continue  for a lifetime. It is a <br/> low-impact activity for physical and mental health</p>
                <button className="btn border text-white my-3 px-5 mb-5">Read More</button>
            </div>
        </div>
    );
};

export default Banner;