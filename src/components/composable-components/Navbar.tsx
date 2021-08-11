import React from "react";
import {NavLink} from 'react-router-dom'
import { FiMenu } from "react-icons/fi";

type navProps = {
  nav: Array<any>;
};


const Navbar = ({ nav = [{"text":"Services","link":"/services"}, {"text":"Careers","link":"/careers"}, {"text":"Contact Us","link":"/contact"}] }: navProps) => {
  return (
    <div className="navbar">
      <div className="leftnavbar">
        <NavLink to="/">Itex</NavLink>
      </div>
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

      <div className="rightnavbar mobile">
        <FiMenu
          onClick={() => {
            console.log("Clciked");
          }}
        />
        <div className="responsive">
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
    </div>
  );
};

export default Navbar;
