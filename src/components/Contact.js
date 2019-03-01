import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h1>LinkedIn</h1>
          <h1>Github</h1>
        </div>
        <div className="col-md-8 text-center">
          <form
            action="https://formspree.io/kiraalasmar@gmail.com"
            method="POST"
          >
            <input type="text" name="name" />
            <br />
            <input type="email" name="_replyto" />
            <br />
            <textarea name="message" placeholder="Enter message here" />
            <br />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
