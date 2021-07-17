import React from "react";
import {Link} from 'react-router-dom'

type navProps = {
  nav: Array<any>;
};


const Navbar = ({ nav = [{"text":"Services","link":"/services"}, {"text":"Careers","link":"/careers"}, {"text":"Contact Us","link":"/contact"}] }: navProps) => {
  return (
    <div className="navbar">
    <div className="leftnavbar"><Link to='/'>Itex</Link></div>
    <div className="rightnavbar">
<ul>
  {
    nav.map((m)=>{
return <li><Link to={m.link}>{m.text}</Link></li>
    })
  }
</ul>
    </div>
  </div>
  );
};

export default Navbar;
