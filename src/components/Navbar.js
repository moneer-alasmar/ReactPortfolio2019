import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">
      <a className="navbar-brand text-primary" href="/">
        Moneer Alasmar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/about">
            About <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="/projects">
            Projects
          </a>
          <a className="nav-item nav-link" href="/contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
