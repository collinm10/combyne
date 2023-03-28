import React from "react";
import '../CSS/WinSection.css';
import { Polygon } from 'react-awesome-shapes';
import Triangle from "./Triangle";
function WinSection() {

    return(
        <div className="WinSection-wrapper d-flex flex-column align-items-center">
            <div className="WinHeader">
                Win.
            </div>
            <Triangle className="triangle" height={800}width={800} fill="#FFFFFF" />
        </div>
    );
}

export default WinSection;