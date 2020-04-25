import React from "react";
import Row from "react-bootstrap/Row";
import Heading from "../headings/Heading";
import PackagesItem from "./PackagesItem";
import Container from "react-bootstrap/Container";


// USE TRIPADVISOR API TO POPULATE PACKAGES WITH REAL TRAVEL DESTINATIONS.
// ADD SEARCH FUNCTIONALITY IN PACKAGES
// ADD DETAILSPAGE FOR INDIVIDUAL PACKAGES
// FILTER PACKAGES BASED ON LOCATION(COUNTRY), PRICE, WIFI, ROOMSERVICE, ADULT ONLY?, FAMILY HOTEL.
// MORE CAN BE USED, BUT THIS WILL BE ENOUGH FOR DEMONSTRATION. 

export function Packages(){
    const packages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let count = 0;
        return(
            <Container>
                <Heading Headline="Packages"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus nisl vel varius egestas.</p>
                
                
                <Row>
                    {packages.map(i =>{ 
                        count++;
                        return(
                            <PackagesItem key={i} sm={12} md={6} lg={4} num={count} border={true}></PackagesItem>
                        );
            
                    })}
            
                </Row>
                
            </Container>
        );
}

export default Packages;