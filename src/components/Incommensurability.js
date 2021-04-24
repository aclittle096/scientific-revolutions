import React, { Component } from 'react';
import { Container } from "react-bootstrap";

export default class Incommensurability extends Component {
    render() {
        return (
            <Container>
                <h1>Arguing against Accumulation</h1>
                <p>
                    The main argument of Kuhn with regards to revolutions was to demonstrate that the cumulative image
                    of progression in science was false. He does so by claiming that, because revolutions are
                    necessary and successive paradigms are incompatible (as we have seen earlier), the endeavour of
                    science is therefore not a cumulative one.
                </p>
                <p>
                    To better paint this picture, Kuhn introduced the term '
                    <a href="https://en.wikipedia.org/wiki/Commensurability_(philosophy_of_science)">incommensurability
                    </a>' in which he claimed that there was no way to compare successive paradigms according to a common standard.
                </p>
                <div className="blockquote-wrapper">
                    <div className="blockquote">
                        <h4>
                            The normal-scientific tradition that emerges from a scientific revolution is not only
                            incompatible but often actually incommensurable with that which has gone before.
                        </h4>
                    </div>
                </div>
                <p className="following-blockquote">
                    This is further evidenced when Kuhn described that, when we switch paradigms, the meanings of all
                    their <a href="https://en.wikipedia.org/wiki/Scientific_terminology">terms</a> change with them.
                    Consequently, scientific theories cannot be compared; that is, they are incommensurable.
                </p>
            </Container>
        );
    }
}
