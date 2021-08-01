import React from 'react';
import data from '../../../data.json'
import CareerDetails from "./CareerDetails";
const Careers = () => {

    return (
        <div className={`careers`}>
            {
                data.careers.map((m,i)=>{
                    return(
                        <div key={m.type+i} className={`career-${i}`}>
                            <h2>{m.type}</h2>
                            <CareerDetails details={m}/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Careers;