import React from "react";

type navProps = {
  nav: Array<string>;
};

const Navbar = ({ nav }: navProps) => {
  return (
    <div>
      {nav.map((m: string) => {
        return m;
      })}
    </div>
  );
};

Navbar.defaultProps = {
  nav: ['Home', 'About', 'Contact Us']};
export default Navbar;
