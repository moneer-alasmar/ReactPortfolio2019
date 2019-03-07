import React from "react";
import portrait from "../media/portrait.jpg";
import { Spring } from "react-spring/renderprops";

const About = () => {
  return (
    <div className="container aboutContainer">
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 1250 }}
      >
        {props => (
          <div style={props}>
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-2 text-light myShadow">
                  ABOUT
                  <span className="text-primary display-2"> ME</span>
                </h1>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-4">
                <img
                  alt=""
                  src={portrait}
                  className="rounded-circle img-fluid mx-auto d-block shadow-lg"
                />
              </div>
              <div className="col-md-8 myBackground rounded">
                <p className="lead text-light">
                  <span style={{ opacity: 1 }}>
                    I want to start by saying thanks for taking your time to
                    find out more about me! I'm a Los Angeles native with a love
                    for all things tech and all things outdoors. When I don't
                    have time to hike(prefferably the Sierra Nevada Mountain
                    Range), I enjoy expanding my knowledge of full stack web
                    developement. I have all of my skills listed below, just
                    click to find out more!
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </Spring>
    </div>
  );
};

export default About;
