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

function Nav(props) {
  return (
    <nav className={"menu " + (!props.shownav ? "show" : "")}>
      <div className={"menu-branding " + (!props.shownav ? "show" : "")}>
        <div className="portrait" />
      </div>
      <ul className={"menu-nav " + (!props.shownav ? "show" : "")}>
        <li className={"nav-item " + (!props.shownav ? "show" : "")}>
          <NavLink exact activeClassName="current" className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className={"nav-item " + (!props.shownav ? "show" : "")}>
          <NavLink activeClassName="current" className="nav-link" to="/about">
            About Me
          </NavLink>
        </li>
        <li className={"nav-item " + (!props.shownav ? "show" : "")}>
          <a href="/" className="nav-link">
            My Work
          </a>
        </li>
        <li className={"nav-item " + (!props.shownav ? "show" : "")}>
          <a href="/" className="nav-link">
            How To Reach Me
          </a>
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
    console.log(this.state.isHidden);
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
        <Nav shownav={this.state.isHidden} />
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
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
