import React, { Component } from "react";

import { Navbar, Nav } from "react-bootstrap";
import { Route, Switch } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";

import { HomePage } from "./pages/home";
// import { Contact } from "./pages/contact";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Pai Now</Navbar.Brand>
            <Nav className="mr-auto" />
            <Nav>
              {/* <Nav.Link>
                <Link to="/contact">Contact</Link>
              </Nav.Link> */}
            </Nav>
          </Navbar>
          <div className="paiContent">
            <Switch>
              <Route exact path="/" component={HomePage} />
              {/* <Route exact path="/contact" component={Contact} /> */}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
