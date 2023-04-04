import React, {useRef, useEffect, useState} from "react";
import '../CSS/CombineTextBox.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import arrow from '../Arrow.svg';
import combynelogo from '../combyne-logo.svg';

function CombineTextBox() {
  //Create background text array
  const repeatMe = "YOUR WINS COUNT. ";
  let displayMe = [];
  for(let i = 0; i < 120; i++){
    displayMe.push(repeatMe);
  }
  
  //Store reference to our background animator objects
  const [backgroundAnimate, setBackgroundAnimate] = useState(" animate");

  const containerRef = useRef(null);

  useEffect(() =>{
    //Create observer to stop and start animation
    const main_animation_observer = new IntersectionObserver(
      entry =>{
          if(entry[0].isIntersecting){
            if(backgroundAnimate != " animate")
              setBackgroundAnimate(" animate");
          }
          else{
            setBackgroundAnimate("");
          }
      },
      {threshold: .1}
    );

    if(containerRef.current) main_animation_observer.observe(containerRef.current);
  });

  /*
  <div className="CombineTextBox-text-wrapper d-flex justify-content-center align-items-center">
                  COMBYNE
              </div>  
  */
  return (
    <div>
      <div ref={containerRef} className="CombineTextBox-wrapper d-flex justify-content-center align-items-center">
          <div className="CombineTextBox">
              <img src={combynelogo} className="combyne-logo"/>
              <div className="CombineTextBox-small-text d-flex justify-content-center align-items-center">
                Your wins count.
              </div>
          </div>
          <div className="CombineTextBox-background-text-wrapper">
            <div className={"TopBackground" + backgroundAnimate}></div>
            <div className={"BottomBackground" + backgroundAnimate}></div>
            <div className="CombineTextBox-background-text">
              {displayMe}
            </div>
          </div>
          <div className="ArrowImage-wrapper d-flex flex-column justify-content-end align-items-center">
            <button onClick={() => {window.scrollBy(0, window.outerHeight - 12)}} className="arrow-button"></button>
            <img src={arrow} className="Arrow-svg" alt="Arrow" />
          </div>
      </div>

    </div>
    
  );
}

export default CombineTextBox;
