import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    //this.state = {  }
  }
  componentDidMount() {
    document.body.id = "bg-img";
  }
  render() {
    return (
      <main id="about">
        <h1 className="lg-heading">
          About&nbsp;<span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">Let me tell you a few things...</h2>
        <div className="about-info">
          <img
            src={"/src/img/portrait.jpg"}
            alt="John Doe"
            className="bio-image"
          />
          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              iure adipisci nihil, tenetur, facere omnis esse error maxime
              ratione nemo ab voluptas nesciunt quo cumque amet consequuntur
              laudantium facilis nostrum!
            </p>
          </div>

          <div className="job job-1">
            <h3>123 webshop</h3>
            <h6>Full Stack Devloper</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              iure adipisci nihil, tenetur, facere omnis esse error maxime
              ratione nemo ab voluptas nesciunt quo cumque amet consequuntur
              laudantium facilis nostrum!
            </p>
          </div>

          <div className="job job-2">
            <h3>Desigers ABC</h3>
            <h6>Front End Devloper</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              iure adipisci nihil, tenetur, facere omnis esse error maxime
              ratione nemo ab voluptas nesciunt quo cumque amet consequuntur
              laudantium facilis nostrum!
            </p>
          </div>

          <div className="job job-3">
            <h3>Webworks</h3>
            <h6>Graphic Designers</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              iure adipisci nihil, tenetur, facere omnis esse error maxime
              ratione nemo ab voluptas nesciunt quo cumque amet consequuntur
              laudantium facilis nostrum!
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default About;
