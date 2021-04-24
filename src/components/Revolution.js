import React, { Component } from 'react';
import { Container } from "react-bootstrap";

export default class Definition extends Component {
    render() {
        return (
            <Container>
                <h1>Likening to Politics</h1>
                <p>
                    Kuhn likened revolutions in science to that of
                    <a href="https://en.wikipedia.org/wiki/Political_revolution"> political revolutions</a>. In his
                        description of both, they come off as starkly similar:
                </p>
                <div className="blockquote-wrapper">
                    <div className="blockquote">
                        <h4>
                            Political revolutions are inaugurated by a growing sense...that existing
                            institutions have ceased adequately to meet the problems posed by an
                            environment that they have in part created.
                        </h4>
                    </div>
                </div>
                <div className="blockquote-wrapper">
                    <div className="blockquote">
                        <h4>
                            Scientific revolutions are inaugurated by a growing sense...that an existing
                            paradigm has ceased to function adequately in the exploration of an aspect of
                            nature to which that paradigm itself had previously led the way.
                        </h4>
                    </div>
                </div>
            </Container>
        );
    }
}
