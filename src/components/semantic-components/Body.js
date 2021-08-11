import React from 'react'
import {useLocation} from 'react-router'
import Mission from '../sub-components/Home/Mission'
import Services from "../sub-components/Services/Services";
import Careers from "../sub-components/Careers/Careers";
import Contact from "../sub-components/Contactus/Contact";

const Body = () => {
    const location = useLocation()
    return (
        <>
            <div className="main">
                {location.pathname === "/" && <Mission/>}

                {location.pathname === "/services" && <Services/>}

                {location.pathname === "/careers" && <Careers/>}

                {location.pathname === '/contact' && <Contact/>}
            </div>
        </>
    )
}

export default Body;
