import React from "react";

const ContactForm = () => {
  return (
    <form action="https://formspree.io/kiraalasmar@gmail.com" method="POST">
      <div class="card border-primary rounded">
        <div class="card-header p-0">
          <div class="bg-primary text-white text-center py-2">
            <h4>
              <i class="fa fa-envelope" /> Contact Me
            </h4>
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
                id="name"
                name="name"
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
                id="email"
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
                name="message"
                placeholder="Your message"
                required
              />
            </div>
          </div>

          <div class="text-center">
            <input
              type="submit"
              value="Send"
              class="btn btn-primary btn-block rounded-0 py-2"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
