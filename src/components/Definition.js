import React, { Component } from 'react';
import { Container } from "react-bootstrap";

export default class Definition extends Component {
    render() {
        return (
            <Container>
                <h1>Definition</h1>
                <p>
                    Before examining what Kuhn had to say in his exposition on
                    <a href="https://en.wikipedia.org/wiki/Scientific_Revolution"> scientific revolutions</a>, we first
                    need to go over how he defined them. In chapter 9, Kuhn penned:
                </p>
                <div className="blockquote-wrapper">
                    <div className="blockquote">
                        <h4>
                            [S]cientific revolutions are...those non-cumulative developmental episodes in which an older
                            <a href="https://en.wikipedia.org/wiki/Paradigm"> paradigm</a> is replaced in whole or in
                            part by an incompatible new one.
                        </h4>
                    </div>
                </div>
            </Container>
        );
    }
}
