import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function PackageItem({key, sm, md, lg, num, border}){
    let CardClass = "package noBorder";
    if(border){
        CardClass = "package"
    }

    return(
        <Col sm={sm} md={md} lg={lg}>
        <Card className={CardClass}>
            <Card.Body className="package__container" key={key}>
                <Card.Title className="package__container--title">{"Package " + num}</Card.Title>
                <Card.Text className="package__container--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus nisl vel varius egestas. Fusce facilisis nunc quis fermentum fermentum.</Card.Text>
            </Card.Body>
            <Button className="btn btn-warning" variant="warning">Find out more</Button>
        </Card>
        </Col>
     
    );

}

export default PackageItem;