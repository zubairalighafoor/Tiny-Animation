import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css';

function App() {
  const { ref} = useWebAnimations({
    keyframes: [
      {transform: 'translateY(0)'},
      {transform: 'translateY(-150px)'},
      {transform: 'translateY(0)'},
    ],
    timing: {
      duration: 1800, // Run for 1000ms
      iterations: Infinity, // Repeat once
    },
  });
  return (
    <div className="container">
      <img className="front" src={process.env.PUBLIC_URL+'Intro_Featured_Image_Empty.svg'} alt=""/>
      <img className="brain" src={process.env.PUBLIC_URL+'Intro_Brain.svg'} ref={ref} alt=""/>
    </div>
  );
}

export default App;
