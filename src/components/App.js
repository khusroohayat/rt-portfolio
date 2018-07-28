import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

function Nav() {
  return (
    <nav className="menu">
      <div className="menu-branding">
        <div className="portrait" />
      </div>
      <ul className="menu-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            About me
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            My Work
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            How To Reach Me
          </a>
        </li>
      </ul>
    </nav>
  );
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

function Home() {
  return (
    <main id="home">
      <h1 className="lg-heading">
        John <span className="text-secondary">Doe</span>
      </h1>
      <h2 className="sm-heading">
        Web Developer, Programmer And Open Source Enthusiast
      </h2>
      <div className="icons">
        <a href="#!">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="#!">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="#!">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="#!">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </main>
  );
}

class App extends Component {
  componentDidMount() {
    document.body.id = "bg-img";
  }
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
