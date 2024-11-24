import React from "react";
import "./Nav.css";

function NavBar() {
  return (
    <header className="nav-header">
      <div className="nav-container">
        <a href="/" className="nav-brand">
          BC Bio Lab Database
        </a>
        <nav className="nav-links">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/search" className="nav-link">
            Search
          </a>
          <a href="/search" className="nav-link">
            Query Test
          </a>
          <a href="/upload" className="nav-link">
            Upload
          </a>
          <a href="/logout" className="nav-link">
            Logout
          </a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;