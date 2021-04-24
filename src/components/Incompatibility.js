import React, { Component } from 'react';
import { Container } from "react-bootstrap";

export default class Incompatibility extends Component {
    render() {
        return (
            <Container>
                <h1>Incompatibility</h1>
                <p>
                    Just as Kuhn described that political recourse fails in the wake of polarization between different
                    <a href="https://en.wikipedia.org/wiki/Political_system"> institutions</a>, he also says the same of
                    science:
                </p>
                <div className="blockquote-wrapper">
                    <div className="blockquote">
                        <h4>
                            Like the choice between competing political institutions, that between competing paradigms
                            proves to be a choice between incompatible modes of community life.
                        </h4>
                    </div>
                </div>
                <p className="following-blockquote">
                    There exists no set of commonly shared rules for scientists to appeal to in order to be
                    convinced to adopt a new paradigm, as the rules of
                    <a href="https://en.wikipedia.org/wiki/Normal_science"> normal science</a> stem from a paradigm.
                </p>
            </Container>
        );
    }
}
