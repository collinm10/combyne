import React, {useRef, useEffect, useState} from 'react'
import './CSS/home.css';
import Canvas from './Canvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cross, Polygon, Star } from 'react-awesome-shapes';
import bracket from './Bracket.svg';

//Import components
import CombineTextBox from './Components/CombineTextBox';
import InfoTextBox from "./Components/InfoTextBox";
import JoinSection from './Components/JoinSection';
import WinSection from './Components/WinSection';
import SurviveSection from './Components/SurviveSection';

function App() {

  const body1 = "Players can join any one of the 30 partnered VALORANT pro teams.";
  const body2 = "Once you've created your account, all you have to do is win some games.";
  const body3 = "The team with the most competitive wins at the end of the week advances.";
  
  const join_section_container = useRef();
  const win_section_container = useRef();
  const survive_section_container = useRef();



  //Get reference to section two and observe it
  useEffect(() => {
    console.log(join_section_container.current)
  }, [join_section_container.current]);

  return (
    <div className="home">
      <CombineTextBox />
      <hr className="separator"/>
      <div className = {"section-two d-flex flex-column justify-content-around align-items-center"}>  
        
        <div className="section-two-background-image d-flex justify-content-center align-items-center">
          <img src={bracket}></img>
        </div>  
            
        <div className="InfoTextBoxes-wrapper mt-5 mb-5 d-flex justify-content-around align-items-center">
          <button onClick={() => join_section_container.current.scrollIntoView()} className="InfoTextBoxes-button">
            <InfoTextBox header="Join." body={body1}/>
          </button>
          <Cross className="arrow" size="5rem" position="relative" zIndex={2} color="#828282" />
          <button onClick={() => handleClick(win_section_container)} className="InfoTextBoxes-button">
            <InfoTextBox header = "Win." body={body2} />
          </button>
          <Cross className="arrow" size="5rem" position="relative" zIndex={2} color="#828282" />
          <button onClick={() => handleClick(survive_section_container)} className="InfoTextBoxes-button">
            <InfoTextBox header = "Survive." body={body3}/>
          </button>
        </div>
      </div>

      <hr className="separator"/>

      <div ref={join_section_container}> 
        <JoinSection/>
      </div>

      <hr className="separator"/>

      <div ref={win_section_container}> 
        <WinSection/>
      </div>

      <hr className="separator"/>
      
      <div ref={survive_section_container}> 
        <SurviveSection/>
      </div>

    </div>
  );
}

const handleClick = ref => {
  ref.current.scrollIntoView();
}

export default App;
