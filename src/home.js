import React, {useRef, useEffect, useState} from 'react'
import './CSS/home.css';
import Canvas from './Canvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cross, Polygon, Star } from 'react-awesome-shapes';
import bracket from './Bracket.svg';
import arrow from './Flipped-Arrow.svg';
import bigArrow from './ArrowSVG.svg';

//Import components
import CombineTextBox from './Components/CombineTextBox';
import InfoTextBox from "./Components/InfoTextBox";
import JoinSection from './Components/JoinSection';
import WinSection from './Components/WinSection';
import SurviveSection from './Components/SurviveSection';
import FAQ from './Components/FAQ';
import Navbar from './Components/HomeNavbar';

function App() {

  const body1 = "Players can join any one of the 30 partnered VALORANT pro teams.";
  const body2 = "Each round will last a week. Single Elimination.";
  const body3 = "The team with the most competitive wins at the end of the week advances.";
  
  const start_section_container = useRef();
  const join_section_container = useRef();
  const win_section_container = useRef();
  const survive_section_container = useRef();
  const section_two_container = useRef();
  

  //Get reference to section two and observe it
  useEffect(() => {
    console.log(join_section_container.current)
  }, [join_section_container.current]);

  return (
    <div className="home">
      <div ref={start_section_container}>
        <CombineTextBox  scrollTo={section_two_container}/>
      </div>
      <hr className="separator"/>
      <Navbar scrollTo={start_section_container} />
      <div className = {"section-two d-flex flex-column justify-content-around align-items-center"}>  
        
        <div ref={section_two_container} className="section-two-background-image d-flex justify-content-center align-items-center">
          <img src={bracket}></img>
        </div>  
        
        <div className="general-description-wrapper">
          <div className="general-description-header h2">
            What is Combyne?
          </div>
          <div className="general-description">
            Combyne offers an exciting new format that integrates regular ranked games with a single elimination tournament. The rules are simple: each time a player emerges victorious in a comp game, their team's score increases by one, vying to beat the opposing team's score to advance to the next round.
          </div>
        </div>
        
        <div>
          <img className="section2-arrow" src={bigArrow}></img>
        </div>

        <div className="InfoTextBoxes-wrapper d-flex justify-content-around align-items-center">
          <button onClick={() => join_section_container.current.scrollIntoView()} className="InfoTextBoxes-button">
            <InfoTextBox header="Join." body={body1}/>
          </button>
          <Cross className="cross-shape" size="3rem" position="relative" zIndex={2} color="#828282" />
          <button onClick={() => handleClick(survive_section_container)} className="InfoTextBoxes-button">
            <InfoTextBox header = "Survive." body={body2} />
          </button>
          <Cross className="cross-shape" size="3rem" position="relative" zIndex={2} color="#828282" />
          <button onClick={() => handleClick(win_section_container)} className="InfoTextBoxes-button">
            <InfoTextBox header = "Win." body={body3}/>
          </button>
        </div>
      </div>

      <hr className="separator"/>
      
      <div ref={join_section_container}> 
        <JoinSection/>
      </div>

      <hr className="separator"/>

      <div ref={survive_section_container}> 
        <SurviveSection/>
      </div>

      <hr className="separator"/>
      
      <div ref={win_section_container}> 
        <WinSection />
      </div>

      <hr className="separator"/>
      
      <div>
        <FAQ />
      </div>
    </div>
  );
}

const handleClick = ref => {
  ref.current.scrollIntoView();
}

export default App;
