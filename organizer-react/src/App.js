import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddEvent from "./components/add-event.component";
import Event from "./components/event.component";
import EventsList from "./components/events-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/events"} className="navbar-brand">
            Eventsite
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/events"} className="nav-link">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/events"]} component={EventsList} />
            <Route exact path="/add" component={AddEvent} />
            <Route path="/events/:id" component={Event} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
