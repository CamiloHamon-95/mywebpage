import { ProjectDescription } from '../ProjectDescription';
import image0 from '../../../images/project0.png';
import image01 from '../../../images/project1.png';
import image02 from '../../../images/project2.png';
import image03 from '../../../images/project3.png';
import image04 from '../../../images/project4.png';
import './ProjectBox.css';
import React from 'react';

const myImage = (nameImage) => {

  const dicImages = {
    'image0': image0,
    'image01': image01,
    'image02': image02,
    'image03': image03,
    'image04': image04,
  }

  return dicImages[nameImage];
};

function ProjectBox ({nameImage, title, content, box, project}) {
    return (
      <div className={`project-box${box ? '-reverse' : ''}`}>
        <div className='project-description'>
          <ProjectDescription
            title={title}
            content={content}
            project={project}
          />
        </div>
        <div className='project-image'>
          <img src={myImage(nameImage)} alt={nameImage} />
        </div>
      </div>
    )
  };
  
  export { ProjectBox };