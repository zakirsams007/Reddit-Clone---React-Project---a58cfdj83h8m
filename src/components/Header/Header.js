import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ButtonClick from '../button/ButtonClick.jsx'
import '../button/Button.css'




function Header() {
  return (
    <div className="header">
     
      <div className="header__left">
        <ul>
          <Link to="" className="active">Popular</Link>
          <Link to="">Hot</Link>
          <Link to="">Rising</Link>
          <Link to="">Controversial</Link>
          <Link to="">Top</Link>
        </ul>
      </div>

      <div className="header__right">

        <i className="fas fa-bell"></i>
        <i className="fas fa-user"></i>
        
        <div className="header__user">

            <ButtonClick />
        </div>

      </div>
    </div>
  );
}

export default Header;
