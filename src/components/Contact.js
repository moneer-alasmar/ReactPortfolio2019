import React from "react";
import resume from "../media/Moneer Alasmar Full Stack Developer.pdf";
import { Spring } from "react-spring/renderprops";
import ContactForm from "./ContactForm";
import IconButton from "./IconButton";

const Contact = () => {
  return (
    <div className="container">
      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
      >
        {props => (
          <div style={props} className="row">
            <div className="col-md-12">
              <div className="jumbotron shadow rounded text-center">
                <div className="d-inline-block mr-2 text-center">
                  <IconButton
                    url="https://github.com/moneer-alasmar"
                    classNameAtag="text-primary"
                    classNameItag="fab fa-github-square h1 shadow"
                    classNamePtag="font-weight-light"
                    text="Github"
                  />
                </div>
                <div className="d-inline-block mr-2 text-center">
                  <IconButton
                    url="https://www.linkedin.com/in/moneer-alasmar/"
                    classNameAtag="text-primary"
                    classNameItag="fab fa-linkedin h1 shadow"
                    classNamePtag="font-weight-light"
                    text="LinkedIn"
                  />
                </div>
                <div className="d-inline-block text-center">
                  <IconButton
                    url="mailto: kiraalasmar@gmail.com"
                    classNameAtag="text-primary"
                    classNameItag="fab fa-google h1 shadow rounded"
                    classNamePtag="font-weight-light"
                    text="Gmail"
                  />
                </div>
                <div className="mt-1">
                  <p>
                    <i class="fas fa-phone" /> (323) 739-3551
                  </p>
                </div>
                <a href={resume} download className="text-primary d-block h5">
                  <i className="fas fa-file-download pt-2" /> Download Resume
                </a>

                <hr />
                <ContactForm />
              </div>
            </div>
          </div>
        )}
      </Spring>
    </div>
  );
};

export default Contact;
