import React from 'react'
import {useLocation} from 'react-router'
import Mission from '../sub-components/Home/Mission'
import Services from "../sub-components/Services/Services";
import Careers from "../sub-components/Careers/Careers";
import Contact from "../sub-components/Contactus/Contact";
import Map from "../sub-components/Contactus/Map";
import Apply from "../sub-components/Careers/Apply";

const Body = () => {
    const location = useLocation()
    return (
        <>
            <div className="main">
                {location.pathname === "/" && <Mission/>}

                {location.pathname === "/services" && <Services/>}

                {location.pathname === "/careers" && <Careers/>}

                {location.pathname === '/contact' && (<><Contact/> <Map/></>)}

                {location.pathname==='/apply' && (<Apply/>)}
            </div>
        </>
    )
}

export default Body;
