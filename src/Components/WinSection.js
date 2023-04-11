import React from "react";
import '../CSS/WinSection.css';

function WinSection() {

    return(
        <div className="WinSection-wrapper d-flex flex-column align-items-center">
            <div className="WinHeader">
                Win.   
            </div>
            <div className="short-desc">
                What do the winners get?
            </div>
            <div className = "WinSection-week-grid">
                <div className="one-column">
                    <div className="week-header w1">
                        Round 1
                    </div>
                    <hr className="hr-line"/>
                    <div className="reward-item w1">
                        Nothing.
                    </div>
                </div>
                
                <div className="one-column">
                    <div className="week-header w2">
                        Round 2
                    </div>
                    <hr className="hr-line"/>
                    <div className="reward-item w2">
                        Still nothing.
                    </div>
                </div>
                
                <div className="one-column">
                    <div className="week-header w3">
                        Round 3
                    </div>
                    <hr className="hr-line"/>
                    <div className="reward-item w3">
                        30,000 XP
                    </div>
                    <div className="reward-item w3">
                        Bragging rights.
                    </div>
                </div>

                <div className="one-column">
                    <div className="week-header w4">
                        Round 4
                    </div>
                    <hr className="hr-line"/>
                    <div className="reward-item w4">
                        40 Radianite
                    </div>
                    <div className="reward-item w4">
                        Boasting rights.
                    </div>
                </div>

                <div className="one-column">
                    <div className="week-header w5">
                        Championship
                    </div>
                    <hr className="hr-line"/>
                    <div className="reward-item w5">
                        40 Radianite
                    </div>
                    <div className="reward-item w5">
                        500 VP
                    </div>
                    <div className="reward-item w5">
                        Best fanbase in the world!
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default WinSection;