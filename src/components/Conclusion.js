import React, { Component } from 'react';
import { Container } from "react-bootstrap";

export default class Conclusion extends Component {
    render() {
        return (
            <Container>
                <h1>Conclusion</h1>
                <p>
                    Kuhn took his discussion of scientific revolutions to arrive at the following: scientists in
                    different paradigms live entirely in different worlds, and therefore there is no common standard
                    to measures their successes. These scientists are playing different games:
                </p>
                <div className="blockquote-wrapper">
                    <div className="blockquote">
                        <h4>
                            Is is rather as if the professional community had been suddenly transported to another
                            planet where familiar objects are seen in a different light and are joined by unfamiliar
                            ones as well.
                        </h4>
                    </div>
                </div>
            </Container>
        );
    }
}