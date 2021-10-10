import React from 'react'
import { TiLocation ,TiMail,TiPhone} from "react-icons/ti";

const Footer = () => {
    return (
      <>
        <div className="footer">
          <div className="address">
            <h3>Find us at</h3>

            <div className="hold">
              <TiLocation />
              <address>
                Suite 678, 7360 - 137 Street Surrey, BC, V3W 1A3, Canada.
              </address>
            </div>
          </div>
          <div className="emailus">
            <h3>Email</h3>
            <div className="hold">
              <a href="mailto:info@itextech.ca"><TiMail/></a>
              <a href="mailto: info@itextech.ca"> info@itextech.ca</a>
            </div>
          </div>
          <div className="contactus">
            <h3>Reach us at</h3>
            <div className="hold">
              <a href="tel:+1 (604)628-1988"><TiPhone/></a>
            <a href="tel:+1 (604)628-1988">
              +1 (604)628-1988
            </a>
            </div>
          </div>
        </div>
      </>
    );
}

export default Footer