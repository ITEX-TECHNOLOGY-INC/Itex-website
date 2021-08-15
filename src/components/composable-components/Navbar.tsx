import React from "react";
import {NavLink} from 'react-router-dom'
import { FiMenu } from "react-icons/fi";

type navProps = {
  nav: Array<any>;
};
const handleToggle = (e: any) => {
    document.querySelector('.navbar')!.classList.toggle('mobile')
}

const Navbar = ({ nav = [{"text":"Services","link":"/services"}, {"text":"Careers","link":"/careers"}, {"text":"Contact Us","link":"/contact"}] }: navProps) => {
  return (
    <div className="navbar">
      <div className="leftnavbar">
        <NavLink to="/">Itex</NavLink>
      </div>
        <FiMenu
            onClick={(e) => {
                handleToggle(e)
            }}
        />
      <div className="rightnavbar">
        <ul>
          {nav.map((m) => {
            return (
              <li key={m.text.toString()}>
                <NavLink activeClassName={"active"} to={m.link}>
                  {m.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
