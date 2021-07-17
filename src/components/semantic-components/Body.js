import React from 'react'
import { useLocation } from 'react-router'
import Development from '../pages/Development'
import Mission from '../sub-components/Home/Mission'

const Body = () => {
    const location=useLocation()
    return (
      <div className="main">
        {location.pathname === "/" && <Mission />}

        {location.pathname === "/services" && <Development />}

        {location.pathname === "/careers" && <Development />}

        {location.pathname === "/contact" && <Development />}
      </div>
    );
}

export default Body
