import React, {useRef, useEffect, useState} from "react";
import '../CSS/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CLogo from '../logo192.png';

function HomeNavbar(props) {

    return(
        <Navbar fixed="top" bg="dark" variant="dark">
            <Container fluid className="nav-bar-container">
                <Navbar.Brand style={{cursor: "pointer"}} onClick={() => {props.scrollTo.current.scrollIntoView()}}>
                        <img src={CLogo} width="40rem"/>{' '}
                </Navbar.Brand>
            </Container>   
        </Navbar>
    );
}

export default HomeNavbar;