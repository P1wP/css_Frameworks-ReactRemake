import React from "react";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import Home from "../home/Home";
import Packages from "../packages/Packages";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";



export function Layout(){
    return(
        <>
        <Router>
        <Navbar variant="dark" expand="lg">
            <NavLink to="/" exact>
                <Navbar.Brand classname="[ nav-Brand ]">January Island Escapes</Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="[ header__btn ]"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <NavLink to="/" exact className="nav-link">
                        Home
                    </NavLink>
                    <NavLink to="/packages" exact className="nav-link">
                        Packages
                    </NavLink>
                    <NavLink to="/contact" className="nav-link">
                        Contact Us
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div className="contaier-fluid">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/packages" component={Packages} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    </Router>

    <Footer />
    </>
    );
};

export default Layout;