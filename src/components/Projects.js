import React from "react";
import myProjects from "../apis/projects.json";

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
  };

  renderContent = () => {
    if (this.state.selectedProjects.length === 0) {
      return this.state.projects.map(project => {
        return (
          <div key={project.title}>
            <h1>{project.title}</h1>
            <img src={project.image} alt="" />
          </div>
        );
      });
    }
    return this.state.selectedProjects.map(project => {
      return (
        <div key={project.title}>
          <h1>{project.title}</h1>
          <img src={project.image} alt="" />
        </div>
      );
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron">
              <h1>Projects</h1>
              <button
                onClick={() => this.selectLanguage("react")}
                className="btn-primary"
              >
                React
              </button>
              <button
                onClick={() => this.selectLanguage("node")}
                className="btn-primary"
              >
                Node
              </button>
            </div>
            <div className="jumbotron">{this.renderContent()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
