import React, {useRef, useEffect, useState} from "react";
import '../CSS/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CLogo from '../logo192.png';

function HomeNavbar(props) {
    
    return(
        <div className="Navbar">
            <button className="NavButton">
                <img src={CLogo} className="CLogo"></img>
                Combyne
            </button>
            <button className="BackToTop">
                Back to Top
            </button>
        </div>
        
    );
}

export default HomeNavbar;