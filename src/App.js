import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles/app.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
