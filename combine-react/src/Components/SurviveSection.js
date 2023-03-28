import React from "react";
import '../CSS/SurviveSection.css';

function SurviveSection() {

    return(
        <div className="SurviveSection-wrapper d-flex flex-column align-items-center">
            <div className="SurviveHeader">
                Survive.    
            </div>
            <div className="short-desc">
                What do the winners get?
            </div>
            <div className = "SurviveSection-week-grid">
                <div className="week-header w1">
                    Round 1
                </div>
                <div className="week-header w2">
                    Round 2
                </div>
                <div className="week-header w3">
                    Round 3
                </div>
                <div className="week-header w4">
                    Round 4
                </div>
                <div className="week-header w5">
                    Championship
                </div>

                <hr className="hr-line"/>
                <hr className="hr-line"/>
                <hr className="hr-line"/>
                <hr className="hr-line"/>
                <hr className="hr-line"/>

                <div className="reward-item w1">
                    Nothing.
                </div>
                <div className="reward-item w2">
                    Still nothing.
                </div>
                <div className="reward-item w3">
                    30,000 XP
                </div>
                <div className="reward-item w4">
                    40 Radianite
                </div>
                <div className="reward-item w5">
                    40 Radianite
                </div>

                <div>
                </div>

                <div className="">
                </div>

                <div className="reward-item w3">
                    Bragging rights.
                </div>

                <div className="reward-item w4">
                    Make fun of all the Round 3 losers.
                </div>

                <div className="reward-item w5">
                    500 VALORANT Points
                </div>

                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className="reward-item w5">
                    Best fanbase in the world!
                </div>
            </div>
        </div>
    );
}

export default SurviveSection;