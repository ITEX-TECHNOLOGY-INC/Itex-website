import React from 'react'

const Footer = () => {
    return (
      <div className="footer">
        <div className="address">
          <p>Find us at</p>
          <address>
            Suite 678, 7360 - 137 Street Surrey, BC, V3W 1A3, Canada.
          </address>
        </div>
        <div className="emailus">
          <p>Email</p>
          <a href="mailto: info@itextech.ca">info@itextech.ca</a>
        </div>
        <div className="contactus">
          <p>Reach us at</p>
          <a href="tel:+1 (604)628-1988">+1 (604)628-1988</a>
        </div>
      </div>
    );
}

export default Footer