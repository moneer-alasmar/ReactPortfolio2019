import React from "react";
import myProjects from "../apis/projects.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import { Spring } from "react-spring/renderprops";

class Projects extends React.Component {
  state = {
    projects: myProjects,
    selectedProjects: []
  };

  selectLanguage = language => {
    if (language === "react") {
      const selected = this.state.projects.filter(project => {
        return project.technology === "react";
      });
      this.setState({ selectedProjects: selected });
    }
    if (language === "node") {
      const selected = this.state.projects.filter(project => {
        return project.technology === "node";
      });
      this.setState({ selectedProjects: selected });
    }
    if (language === "all") {
      this.setState({ selectedProjects: [] });
    }
  };

  renderContent = () => {
    if (this.state.selectedProjects.length === 0) {
      return (
        <Carousel showThumbs={false}>
          {this.state.projects.map(project => {
            return (
              <div key={project.title}>
                <a href={project.deployLink}>
                  <h4>{project.title}</h4>
                </a>
                <a href={project.githubLink}>Github</a>
                <img src={project.image} alt={project.title} />
              </div>
            );
          })}
        </Carousel>
      );
    }
    return (
      <Carousel showThumbs={false}>
        {this.state.selectedProjects.map(project => {
          return (
            <div key={project.title}>
              <a href={project.deployLink}>
                <h4>{project.title}</h4>
              </a>
              <a href={project.githubLink}>Github</a>
              <img src={project.image} alt={project.title} />
            </div>
          );
        })}
      </Carousel>
    );
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8">
            <div className="jumbotron text-center shadow">
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: 1000 }}
              >
                {props => (
                  <p className="display-4" style={props}>
                    My Apps
                  </p>
                )}
              </Spring>
              <Typist avgTypingSpeed={40} startDelay={1100}>
                <p className="lead" style={{ display: "inline-block" }}>
                  Filter by Technology:
                </p>
              </Typist>
              <button
                onClick={() => this.selectLanguage("react")}
                className="btn btn-primary mr-2"
              >
                <i className="fab fa-react mr-1" />
                React
              </button>
              <button
                onClick={() => this.selectLanguage("node")}
                className="btn btn-primary mr-2"
              >
                <i className="fab fa-node-js mr-1" />
                Node
              </button>
              <button
                onClick={() => this.selectLanguage("all")}
                className="btn btn-primary"
              >
                Clear
              </button>
              <div style={{ paddingTop: 10 }}>{this.renderContent()}</div>
            </div>
          </div>
          <div className="col-md-2" />
        </div>
      </div>
    );
  }
}

export default Projects;
