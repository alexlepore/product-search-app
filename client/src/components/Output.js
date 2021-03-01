import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function Output(props){
    return(
        <Row className="justify-content-center">
            <Col className="text-center">
                <img src={props.image} alt="img" />
            </Col>
            <Col>
                <Row>
                    <h1>{props.title}</h1>
                </Row>
                <Row>
                    <span>
                        <a href={props.link} targe="_blank">Click Here</a>
                    </span>
                </Row>
            </Col>
        </Row>
    )
}