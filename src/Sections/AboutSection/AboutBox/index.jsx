import React from 'react';
import './AboutBox.css';


function AboutBox ({title, text}) {
    return (
      <div className="aboutbox">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    )
  };
  
  export { AboutBox };