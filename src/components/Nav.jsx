import React from "react";
import "./Nav.css";  // We'll add custom CSS for styling

function Nav() {
  return (
    <div className="nav-home">
      <nav className="navbar">
        <div className="navbar-brand">BC Bio Lab Database</div>
        <button className="navbar-toggler" onClick={() => {
          document.getElementById("nav-links").classList.toggle("active");
        }}>
          ☰
        </button>
        <div className="navbar-links" id="nav-links">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/trailers">Search</a>
            </li>
            <li>
              <a href="/list">Upload</a>
            </li>
            <li>
              <a href="/">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
