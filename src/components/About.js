import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import Kuhn from '../kuhn.jpg';

export default class About extends Component {
    render() {
        return (
            <Container>
                <h1>About</h1>
                <img src={ Kuhn } alt="thomas kuhn" />
                <p>
                    Philosopher of Science extraordinaire, <a href="https://en.wikipedia.org/wiki/Thomas_Kuhn">Thomas S.
                    Kuhn</a> was a member of this world from 1922 to 1996. He earned a PhD in Physics from Harvard
                    University in 1949, but is was not long before he switched to history and the
                    <a href="https://en.wikipedia.org/wiki/Philosophy_of_science"> philosophy of science</a>. Eventually
                    coming to work at the University of California, Berkeley, it is here where Kuhn crafted and
                    published his most famed work in 1962,
                    <i> <a href="https://en.wikipedia.org/wiki/The_Structure_of_Scientific_Revolutions">
                            The Structure of Scientific Revolutions
                    </a></i>.
                </p>
                <p>
                    More information about Kuhn's life and philosophy can be found on both the
                    <a href="https://plato.stanford.edu/entries/thomas-kuhn/"> Stanford</a> and
                    <a href="https://iep.utm.edu/kuhn-ts/"> Internet Encyclopedia of Philosophy</a> websites.
                </p>
            </Container>
        );
    }
}