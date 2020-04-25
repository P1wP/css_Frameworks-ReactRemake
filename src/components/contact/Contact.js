import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Heading from "../headings/Heading";
import ContactForm from "./ContactForm";

export function Contact(){
    return(
        <Container id="contactContainer">
            <Row>
                <Col sm={12}>
                <Heading Headline="Contact" />
                </Col>
            
                <Col sm={12}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse luctus nisl vel varius egestas. Fusce facilisis nunc quis fermentum fermentum.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col sm={12}>
                    <ContactForm/>
                </Col>
            </Row>
            
        </Container>
    );
}

export default Contact;