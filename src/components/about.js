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
            src={require("../img/portrait.jpg")}
            alt="John Doe"
            className="bio-image"
          />
          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
              Innovative software engineer offering four years of experience in
              the full software development lifecycle – from concept through
              delivery of next-generation applications and customizable
              solutions
            </p>
          </div>

          <div className="job job-1">
            <h3>10Pearls</h3>
            <h6>Software Devloper</h6>
            <p>
              Worked as a Microsoft CRM developer for their project of major
              Health care company. originally employed to help build their
              customer engagement activities through CRM and also consult the
              client how to integrate their existing application with CRM
              <br />
              <br />
              Worked as a Backend Developer to create Restful API's for
              company's internal employee management system.
              <br />
              <br />
              Worked as a Software Developer for their project of major Tele
              health care company. originally employed to help maintain and
              build their existing application and also created automated
              testing framework for their browser based applications.
              <br />
              <br />
              Worked on a micro service that extracts data from different
              databases and load in to data warehouse for reporting and
              analytics purposes.
            </p>
          </div>

          <div className="job job-2">
            <h3>Shiner Soft</h3>
            <h6>Software Engineer</h6>
            <p>
              Worked as a Software Engineer for the Health Care project of
              Patient and Provider portal, originally employed to help build
              portal for Web using Asp.net
              <br />
              <br />
              Worked as a Software Developer to help build their Patient Portal
              mobile Application for Android using Xamarin
            </p>
          </div>

          <div className="job job-3">
            <h3>Naveena Group of Industries</h3>
            <h6>Trainee Software Engineer</h6>
            <p>Worked as a Software Developer for in-house ERP project.</p>
          </div>
        </div>
      </main>
    );
  }
}

export default About;
