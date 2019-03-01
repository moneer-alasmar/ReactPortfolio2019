import React from "react";
import resume from "../media/Moneer Alasmar Full Stack Developer.pdf";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 jumbotron shadow rounded text-center inline-block">
          <div className="pb-2">
            <h1 className="text-primary">Moneer Alasmar</h1>
            <p>
              <i class="fas fa-globe-americas" /> Los Angeles, CA
            </p>
            <p>
              <i class="fas fa-phone" /> (323) 739-3551
            </p>
          </div>
          <div className="d-inline-block mr-2 text-center">
            <a
              href="https://github.com/moneer-alasmar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              <i className="fab fa-github-square h1 shadow" />
            </a>
            <div>Github</div>
          </div>
          <div className="d-inline-block mr-2 text-center">
            <a
              href="https://www.linkedin.com/in/moneer-alasmar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              <i className="fab fa-linkedin h1 shadow" />
            </a>
            <div>Linkedin</div>
          </div>
          <div className="d-inline-block text-center">
            <a
              href="mailto: kiraalasmar@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              <i className="fab fa-google h1 shadow rounded" />
            </a>
            <div>Gmail</div>
          </div>
          <hr />
          <a href={resume} download className="text-primary d-block h5">
            <i className="fas fa-file-download pt-3" /> Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
