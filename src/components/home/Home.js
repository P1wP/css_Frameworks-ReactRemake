import React from "react";
import Container from "react-bootstrap/Container";

import Slider from "../slider/Slider";
import Heading from "../headings/Heading";
import HomePackages from "../packages/HomePackages";


export function Home(){
    return(
        <>
            <Slider/>

            <Container>
                <Heading Headline="Welcome to January Island Escapes"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus nisl vel varius egestas.</p>
                <HomePackages/>
            </Container>
        </>
    );
}

export default Home;