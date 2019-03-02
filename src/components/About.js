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
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <button className="btn btn-primary btn-block shadow-lg mb-3">
                  <h3
                    className="myShadow text-light"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Tech Skills
                  </h3>
                </button>

                <button className="btn btn-primary btn-block shadow-lg mb-3">
                  <h3
                    className="myShadow text-light"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Experience
                  </h3>
                </button>

                <button className="btn btn-primary btn-block shadow-lg">
                  <h3
                    className="myShadow text-light"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Education
                  </h3>
                </button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Modal title
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>
    </div>
  );
};

export default About;
