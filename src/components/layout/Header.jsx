import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/Logo.webp";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo-container">
          <img
            src={logo}
            alt="Логотип"
            className="logo-img"
            style={{ height: "60px", width: "auto" }}
          />
          <span className="logo-text">ANDI Pro Market</span>
        </div>

        <nav className="nav">
          <Link to="/">Main</Link>
          <Link to="/about">About us</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/order">Order</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
        <nav className="nav">
          <a href="/">Main</a>
          <a href="/login">Enter</a>
          <a href="/register">Registration</a>
        </nav>

        <p className="call-btn">+1 (929) 555-1234</p>
      </div>
    </header>
  );
}

export default Header;
