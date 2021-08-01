import React from 'react';
import Servicecard from "./Servicecard";
import data from '../../../data.json'

const Services = () => {



    return (
        <div className={`services`}>
            <h2>Services</h2>
            <p>Our expertise - deliver a quality software solution in the predetermined cost and time.</p>
            <Servicecard services={data.services}/>
        </div>
    );
};

export default Services;