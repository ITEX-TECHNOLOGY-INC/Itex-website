import React from "react";
import Navbar from "../composable-components/Navbar";

const Header = () => {
  return (
    <div className="header">
      <Navbar nav={["Home", "About Us", "Contact Us"]} />
    </div>
  );
};

export default Header;
