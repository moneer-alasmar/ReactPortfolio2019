import React from "react";
import portrait from "../media/portrait.jpg";
import resume from "../media/Moneer Alasmar Full Stack Developer.pdf";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="jumbotron shadow">
            <img
              src={portrait}
              alt=""
              className="rounded-circle mx-auto d-block shadow-lg"
            />
            <h1 className="display-4">Moneer Alasmar</h1>
            <p className="lead">
              Full Stack Web Developer, Photographer & Designer
            </p>
            <hr />

            <div className="text-center">
              <a
                href="https://www.linkedin.com/in/moneer-alasmar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                <i className="fab fa-linkedin h1 shadow mr-2" />
              </a>
              <a
                href="https://github.com/moneer-alasmar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                <i className="fab fa-github-square h1 shadow" />
              </a>
              <br />
              <a href={resume} download className="text-primary">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;