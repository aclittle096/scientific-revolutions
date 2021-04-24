import React, { Component } from 'react';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import './App.css';

import Home from "./components/Home";
import Definition from "./components/Definition";
import Revolution from "./components/Revolution";
import Incompatibility from "./components/Incompatibility";
import Necessity from "./components/Necessity";
import Incommensurability from "./components/Incommensurability";
import Conclusion from "./components/Conclusion";
import About from "./components/About";

class App extends Component {
  render() {

    // document.body.classList.add('effects');

    return (
        <BrowserRouter className="main">
          <Container className="mt-5">
            <Row>

              {/* Sidebar */}
              <Col sm={3}>
                <ul className="sidebar">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <hr />
                  </li>
                  <li>
                    <Link to="/definition">Definition</Link>
                  </li>
                  <li>
                    <Link to="/revolution">Revolution</Link>
                  </li>
                  <li>
                    <Link to="/incompatibility">Incompatibility</Link>
                  </li>
                  <li>
                    <Link to="/necessity">Necessity</Link>
                  </li>
                  <li>
                    <Link to="/incommensurability">Incommensurability</Link>
                  </li>
                  <li>
                    <Link to="/conclusion">Conclusion</Link>
                  </li>
                  <li>
                    <hr />
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </Col>

              {/* Information */}
              <Col sm={9}>
                <Switch>
                  <Route exact path="/" component={ Home } />
                  <Route exact path="/definition" component={ Definition } />
                  <Route exact path="/revolution" component={ Revolution } />
                  <Route exact path="/incompatibility" component={ Incompatibility } />
                  <Route exact path="/necessity" component={ Necessity } />
                  <Route exact path="/incommensurability" component={ Incommensurability } />
                  <Route exact path="/about" component={ About } />
                  <Route exact path="/conclusion" component={ Conclusion } />
                </Switch>
              </Col>

            </Row>
          </Container>
        </BrowserRouter>
    );
  }
}

export default App;
