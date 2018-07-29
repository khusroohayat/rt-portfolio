import React, { Component } from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  fab
} from "../../node_modules/@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";

class Work extends Component {
  render() {
    return (
      <main id="work">
        <h1 className="lg-heading">
          My&nbsp;<span className="text-secondary">Work</span>
        </h1>
        <h2 className="sm-heading">Check out some of my projects...</h2>
        <div className="projects">
          <div className="item">
            <a href="#1">
              <img src={"/src/img/projects/project1.jpg"} alt="Project" />
            </a>
            <a href="#" className="btn-light">
              <FontAwesomeIcon icon={faEye} className="fas" />
              Project
            </a>
            <a href="#" className="btn-dark">
              <FontAwesomeIcon icon={faGithub} className="fab" />
              Github
            </a>
          </div>
          <div className="item">
            <a href="#1">
              <img src={"/src/img/projects/project2.jpg"} alt="Project" />
            </a>
            <a href="#" className="btn-light">
              <FontAwesomeIcon icon={faEye} className="fas" />
              Project
            </a>
            <a href="#" className="btn-dark">
              <FontAwesomeIcon icon={faGithub} className="fab" />
              Github
            </a>
          </div>
          <div className="item">
            <a href="#1">
              <img src={"/src/img/projects/project3.jpg"} alt="Project" />
            </a>
            <a href="#" className="btn-light">
              <FontAwesomeIcon icon={faEye} className="fas" />
              Project
            </a>
            <a href="#" className="btn-dark">
              <FontAwesomeIcon icon={faGithub} className="fab" />
              Github
            </a>
          </div>
          <div className="item">
            <a href="#1">
              <img src={"/src/img/projects/project4.jpg"} alt="Project" />
            </a>
            <a href="#" className="btn-light">
              <FontAwesomeIcon icon={faEye} className="fas" />
              Project
            </a>
            <a href="#" className="btn-dark">
              <FontAwesomeIcon icon={faGithub} className="fab" />
              Github
            </a>
          </div>
          <div className="item">
            <a href="#1">
              <img src={"/src/img/projects/project5.jpg"} alt="Project" />
            </a>
            <a href="#" className="btn-light">
              <FontAwesomeIcon icon={faEye} className="fas" />
              Project
            </a>
            <a href="#" className="btn-dark">
              <FontAwesomeIcon icon={faGithub} className="fab" />
              Github
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default Work;
