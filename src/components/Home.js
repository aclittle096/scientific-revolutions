import React, { Component } from 'react';
import { Container } from "react-bootstrap";

export default class Home extends Component {
    render() {
        return (
            <Container>
                <h1>Scientific Revolutions</h1>
                <p>
                    Welcome! In this informative website, one may find all they need to know regarding the
                    discussion of <b>scientific revolutions</b> by Thomas Kuhn in his book, <i>The Structure of
                    Scientific Revolutions</i>.
                </p>
                <p>
                    To get started, you may begin by selecting the "Definition" link on the left sidebar of the website,
                    where you may select each successive link after you have finished reading each page.
                </p>
            </Container>
        );
    }
}