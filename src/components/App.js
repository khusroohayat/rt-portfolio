import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Nav() {
    return (
        <nav className="menu show">
        <div className="menu-branding show">
          <div className="portrait show" />
        </div>
        <ul className="menu-nav show">
          <li className="nav-item current show">
            <a href="index.html" className="nav-link show">
              Home
            </a>
          </li>
        </ul>
        <ul className="menu-nav show">
          <li className="nav-item current show">
            <a href="index.html" className="nav-link show">
              About
            </a>
          </li>
        </ul>
      </nav>
    )
}

function Header() {
  return (
    <header>
      <div className="menu-btn">
        <FontAwesomeIcon icon={faBars} size="lg" />
      </div>
      <Nav />
    </header>
  );
}



class App extends Component {
  render() {
    return (
      <div>
        {/* <Nav /> */}
        <Header />
        <Nav />
      </div>
    );
  }
}

export default App;
