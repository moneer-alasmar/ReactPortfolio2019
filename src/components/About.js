import React from "react";
import portrait from "../media/portrait.jpg";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 class="display-2 text-light myShadow">
            ABOUT
            <span class="text-primary display-2"> ME</span>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <img
            src={portrait}
            class="rounded-circle img-fluid mx-auto d-block shadow-lg"
          />
        </div>
        <div className="col-md-8 myBackground rounded">
          <p className="lead text-light">
            <span style={{ opacity: 1 }}>
              I'm an innovative software engineer offering 3+ years of
              experience in the full software development lifecycle. When I'm
              not coding I enjoy learning about and enhancing my photography,
              hiking and spending time with my wife! You'll find more
              information about my technical skills below, just click to read
              more!
            </span>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 text-center">
          <h1
            className="myShadow text-light"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Skills
          </h1>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ height: 100 }} />
    </div>
  );
};

export default About;
