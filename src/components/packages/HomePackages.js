import React from "react";
import Row from "react-bootstrap/Row";

import PackagesItem from "../packages/PackagesItem";

function HomePackages(){
    const packages = [1, 2, 3, 4];
    let count = 0;
    return(
        <Row>
            {packages.map(i =>{ 
                count++;
                return(
                    <PackagesItem  key={i} sm={12} md={6} lg={3} num={count} border={false}></PackagesItem>
                );
            
            })}
            
        </Row>
    );
}

export default HomePackages;