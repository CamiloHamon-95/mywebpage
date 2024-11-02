import profilePhoto from '../images/camiloMainPage.png';
import chessPhoto from '../images/camiloAjedrez.png';
import React from 'react';
import './ImageComponent.css';

const myImage = (nameImage) => {

  const dicImages = {
    'image-home': profilePhoto,
    'image-about': chessPhoto
  }

  return dicImages[nameImage];
};


function ImageComponent ({nameImage}) {
  return (
    <div className={`ct-photo ${nameImage}`}>
      <div className={`photo-frame ${nameImage}`}>
        <img src={myImage(nameImage)} alt={nameImage} />
      </div>
    </div>
  )
};

export { ImageComponent };
