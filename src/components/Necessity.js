import React, { Component } from 'react';
import { Container } from "react-bootstrap";

export default class Incompatibility extends Component {
    render() {
        return (
            <Container>
                <h1>Necessity of Scientific Revolutions</h1>
                <p>
                    The mainstay theme of Kuhn's discussion of revolutions was that they were necessary for new discoveries
                    and theories in science. According to Kuhn, these new
                    <a href="https://en.wikipedia.org/wiki/Discovery_(observation)#In_science"> discoveries</a> and
                    <a href="https://en.wikipedia.org/wiki/Scientific_theory"> theories</a> themselves require the
                    discovery of <i><a href="https://en.wikipedia.org/wiki/Anomalistics">anomalies</a></i>: the
                    unexpected findings of science.
                </p>
                <div className="blockquote-wrapper">
                    <div className="blockquote">
                        <h4>
                            Paradigms provide all phenomena except anomalies with a theory-determined place in the
                            scientist’s field of vision.
                        </h4>
                    </div>
                </div>
                <p className="following-blockquote">
                    Kuhn continued that scientific revolutions are required for the assumption of something to be true:
                </p>
                <div className="blockquote-wrapper">
                    <div className="blockquote">
                        <h4>
                            [I]f new theories are called forth to resolve anomalies in the relation of an existing
                            theory to nature, then the successful new theory must somewhere permit predictions that are
                            different from those derived from its predecessor. That difference could not occur if the
                            two were logically compatible. In the process of being assimilated, the second must displace
                            the first.
                        </h4>
                    </div>
                </div>
                <p className="following-blockquote">We can then conclude that scientific revolutions--where a novel, incompatible paradigm takes a
                community by storm--is ultimately necessary.</p>
            </Container>
        );
    }
}
