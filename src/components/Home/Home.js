import React from 'react';
import Banner from '../Banner/Banner';
import Course from '../Course/Course';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <h3 className="text-center mt-5 text-uppercase">Our <span className="color-header">Courses</span> </h3>
                <hr />
              <Course></Course>
            </div>

        </div>
    );
};

export default Home;