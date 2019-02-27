import React from "react";
import portrait from "../media/portrait.jpg";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="container" style={{ marginTop: 75 }}>
      <div className="jumbotron">
        <div className="col-md-12">
          <img
            src={portrait}
            alt="..."
            class="rounded-circle mx-auto d-block"
          />
        </div>
        <h1 className="display-4">Moneer Alasmar</h1>
        <p className="lead">Full Stack Web Developer, Programmer & Designer</p>
        <hr className="my-4" />
        <div className="text-center">
          <a href="#" class="text-primary">
            <i className="fab fa-linkedin h1 mr-3" />
          </a>
          <a href="#" class="text-primary">
            <i className="fab fa-github h1" />
          </a>
        </div>
        <div className="col-md-12" style={{ height: 245 }} />
      </div>
    </div>
  );
};

export default Home;
