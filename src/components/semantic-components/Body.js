import React from 'react'
import { useLocation } from 'react-router'
import Mission from '../sub-components/Home/Mission'
import Services from "../sub-components/Services/Services";

const Body = () => {
    const location=useLocation()
    return (
      <div className="main">
        {location.pathname === "/" && <Mission />}

        {location.pathname === "/services" && <Services/> }

        {/*{location.pathname === "/careers"}*/}

        {/*{location.pathname === "/contact"}*/}
      </div>
    );
}

export default Body;
