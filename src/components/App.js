import React, { Component } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faStop,
  faCrosshairs,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import About from "./about";
import Work from "./work";
import Contact from "./contact";

function Nav(props) {
  return (
    <nav className={"menu " + (!props.shownav ? "show" : "")}>
      <div className={"menu-branding " + (!props.shownav ? "show" : "")}>
        <div className="portrait" />
      </div>
      <ul className={"menu-nav " + (!props.shownav ? "show" : "")}>
        <li className={"nav-item " + (!props.shownav ? "show" : "")}>
          <NavLink
            exact
            activeClassName="current"
            className="nav-link"
            to="/"
            onClick={props.callToggleMenu.bind(this)}
          >
            Home
          </NavLink>
        </li>
        <li className={"nav-item " + (!props.shownav ? "show" : "")}>
          <NavLink
            activeClassName="current"
            className="nav-link"
            to="/about"
            onClick={props.callToggleMenu.bind(this)}
          >
            About Me
          </NavLink>
        </li>
        <li className={"nav-item " + (!props.shownav ? "show" : "")}>
          <NavLink
            activeClassName="current"
            className="nav-link"
            to="/work"
            onClick={props.callToggleMenu.bind(this)}
          >
            Work
          </NavLink>
        </li>
        <li className={"nav-item " + (!props.shownav ? "show" : "")}>
          <NavLink
            activeClassName="current"
            className="nav-link"
            to="/contact"
            onClick={props.callToggleMenu.bind(this)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isHidden: true };

    this.toggleMenu = this.toggleMenu.bind(this);
  }
  
  toggleMenu() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }
  render() {
    return (
      <header>
        <div className="menu-btn" onClick={this.toggleMenu}>
          {this.state.isHidden ? (
            <Child icon={faBars} />
          ) : (
            <Child icon={faTimes} />
          )}
        </div>
        <Nav shownav={this.state.isHidden} callToggleMenu={this.toggleMenu} />
      </header>
    );
  }
}

const Child = props => {
  return <FontAwesomeIcon icon={props.icon} size="2x" />;
};

const Footer = () => {
  return <footer id={"main-footer"}>Copyright &copy; 2018</footer>;
};

function Home() {
  return (
    <main id="home">
      <h1 className="lg-heading">
        Khusroo <span className="text-secondary">Hayat</span>
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
  constructor(props) {
    super(props);
    this.state = { showmenu: true };
  }
  componentDidMount() {
    document.body.id = "bg-img";
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
