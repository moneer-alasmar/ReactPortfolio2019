import React from "react";
import resume from "../media/Moneer Alasmar Full Stack Developer.pdf";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="jumbotron shadow rounded text-center">
            <div className="d-inline-block mr-2 text-center">
              <a
                href="https://github.com/moneer-alasmar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                <i className="fab fa-github-square h1 shadow" />
              </a>
              <p className="font-weight-light">Github</p>
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
              <p className="font-weight-light">Linkedin</p>
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
              <p className="font-weight-light">Gmail</p>
            </div>
            <div className="mt-3">
              <p>
                <i class="fas fa-phone" /> (323) 739-3551
              </p>
            </div>
            <a href={resume} download className="text-primary d-block h5">
              <i className="fas fa-file-download pt-2" /> Download Resume
            </a>

            <hr />
            <form action="mail.php" method="post">
              <div class="card border-primary rounded">
                <div class="card-header p-0">
                  <div class="bg-primary text-white text-center py-2">
                    <h3>
                      <i class="fa fa-envelope" /> Contact Me
                    </h3>
                  </div>
                </div>
                <div class="card-body p-3">
                  <div class="form-group">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="fa fa-user text-primary" />
                        </div>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        id="nombre"
                        name="nombre"
                        placeholder="Name"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="fa fa-envelope text-primary" />
                        </div>
                      </div>
                      <input
                        type="email"
                        class="form-control"
                        id="nombre"
                        name="email"
                        placeholder="Example@gmail.com"
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="fa fa-comment text-primary" />
                        </div>
                      </div>
                      <textarea
                        class="form-control"
                        placeholder="Your message"
                        required
                      />
                    </div>
                  </div>

                  <div class="text-center">
                    <input
                      type="submit"
                      value="Enviar"
                      class="btn btn-primary btn-block rounded-0 py-2"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
