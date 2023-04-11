import React from "react";
import '../CSS/FAQ.css';

function FAQSection() {
    return(
        <div className="FAQ-wrapper d-flex flex-column align-items-center">
            <div className="FAQHeader">
                FAQ
            </div>
            <div className="FAQ-grid-wrapper">
                <div className="FAQ-Grid">
                    <div className="question-wrapper">
                        How do I participate?
                        <div className="answer-wrapper">
                            Simply sign up and connect your riot account. As long as your team hasn't lost yet, your competitve wins will go towards your team's total.
                        </div>
                    </div>
                    <div className="question-wrapper">
                        When does the event start?
                        <div className="answer-wrapper">
                            Round one of the tournament will start on May 29th.
                        </div>
                    </div>
                    <div className="question-wrapper">
                        How many players can join a team?
                        <div className="answer-wrapper">
                            There is no cap on players. Just join your favorite team and help them win.
                        </div>
                    </div>
                    <div className="question-wrapper">
                        What if my team loses?
                        <div className="answer-wrapper">
                            L fans. There will probably be another event similar to this one.
                        </div>
                    </div>
                    <div className="question-wrapper">
                        Is there a way to link up with teammates?
                        <div className="answer-wrapper">
                            Currently in progress. You can download our overlay that will display players' teams when loading into a match. 
                        </div>
                    </div>
                    <div className="question-wrapper">
                        What's the point?
                        <div className="answer-wrapper">
                            There are rewards up for grabs starting when you WIN in round 3. First you have to make it that far.
                        </div>
                    </div>
                </div>
            </div>

            <div className="start-date-label">
                Round 1. <span className="highlight-me">May 29th.</span> Join your team.
            </div>
        </div>
    );
}

export default FAQSection;