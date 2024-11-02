import { ImageComponent } from '../../ImageComponent';

import React from 'react';

import './IntroSection.css';


function IntroSection () {
    return (
      <section className='ct-intro' id='presentation'>
        <ImageComponent 
          nameImage = 'image-home'
        />
        <div className='ct-description'>
          <h1>Camilo</h1>
          <h2>Backend Developer</h2>
        </div>
      </section>
    )
  };
  
  export { IntroSection };