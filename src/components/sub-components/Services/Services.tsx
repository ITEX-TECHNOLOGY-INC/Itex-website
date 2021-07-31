import React from 'react';
import Servicecard from "./Servicecard";

const Services = () => {
    const servicesoffered=[{id:1,text:'Web Design and Development'},{id:2,text:'Mobile Application Developemnt'},{id:3,text:'Data Analysis for Business'},{id:4,text:'SEO Optimization'}]

    // @ts-ignore
    return (
        <div className={`services`}>
            <h2>Services</h2>
            <p>Our expertise - deliver a quality software solution in the predetermined cost and time.</p>
            <Servicecard services={servicesoffered}/>
        </div>
    );
};

export default Services;