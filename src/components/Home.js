import React from "react";
import portrait from "../media/portrait.jpg";
import resume from "../media/Moneer Alasmar Full Stack Developer.pdf";
import { Spring } from "react-spring/renderprops";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

const Home = () => {
  return (
    <div className="container">
      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
      >
        {props => (
          <div style={props} className="row">
            <div className="col-md-12">
              <div className="jumbotron shadow">
                <Spring
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}
                  config={{ duration: 1750 }}
                >
                  {props => (
                    <img
                      style={props}
                      src={portrait}
                      alt=""
                      className="rounded-circle mx-auto d-block shadow-lg"
                    />
                  )}
                </Spring>

                <Spring
                  from={{ opacity: 0, marginLeft: -1000 }}
                  to={{ opacity: 1, marginLeft: 0 }}
                  config={{ duration: 1500 }}
                >
                  {props => (
                    <div style={props}>
                      <h1 className="display-6 pt-2">Moneer Alasmar</h1>
                    </div>
                  )}
                </Spring>
                <Typist avgTypingSpeed={40} startDelay={1100}>
                  <p className="lead" style={{ display: "inline-block" }}>
                    Web Developer... Photographer... Tech Enthusiast
                  </p>
                </Typist>

                <hr style={{ marginTop: 0 }} />

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
                    <i className="fas fa-file-download pt-4" /> Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>
    </div>
  );
};

export default Home;
