import React from "react";
import '../CSS/SurviveSection.css';
import { Polygon } from 'react-awesome-shapes';
import Triangle from "./Triangle";
import BracketPic from '../ac_bracket.svg';

function SurviveSection() {
    return(
        <div className="SurviveSection-wrapper d-flex flex-column align-items-center">
            <div className="SurviveHeader">
                Survive.
            </div>
            <div className="SurviverSubtext d-flex flex-column align-items-center">
                The tournament is single elimination. Each round will last a week ending on mondays at 10 AM EST.
            </div>
            <div className="acbracket-wrapper">
                <img src={ BracketPic } />
            </div>
        </div>
    );
}

export default SurviveSection;