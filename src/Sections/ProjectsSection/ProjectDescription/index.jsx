import { TodoIcon } from '../../../TodoIcon';
import './ProjectDescription.css';
import React from 'react';

function ProjectDescription ({title, content, project}) {

  const clickProject = (numberProject, nameProject) => {

    var actions = {
      linkProject: () => {
        window.open('https://github.com/CamiloHamon-95','_blank');
      },
      github: () => {
        window.open('https://github.com/CamiloHamon-95','_blank');
      },
      youtube: () => {
          window.open('https://www.youtube.com/@CamiloHamon', '_blank');
      }
    };

    switch (numberProject) {
      case 1:
        actions = {
          linkProject: () => {
            window.open('https://github.com/CamiloHamon-95/aboutme','_blank');
          },
          github: () => {
            window.open('https://github.com/CamiloHamon-95/aboutme','_blank');
          },
          youtube: () => {
              window.open('https://www.youtube.com/@CamiloHamon', '_blank');
          }
        };
        break;
      
      case 2:
        actions = {
          linkProject: () => {
            window.open('https://github.com/CamiloHamon-95/duties-frontend','_blank');
          },
          github: () => {
            window.open('https://github.com/CamiloHamon-95/duties-frontend','_blank');
          },
          youtube: () => {
              window.open('https://www.youtube.com/@CamiloHamon', '_blank');
          }
        };
        break;
      
      case 3:
        actions = {
          linkProject: () => {
            window.open('https://github.com/CamiloHamon-95/guitar-ecommerce','_blank');
          },
          github: () => {
            window.open('https://github.com/CamiloHamon-95/guitar-ecommerce','_blank');
          },
          youtube: () => {
              window.open('https://www.youtube.com/@CamiloHamon', '_blank');
          }
        };
        break;

      case 4:
        actions = {
          linkProject: () => {
            window.open('https://github.com/CamiloHamon-95/telemarketingHamonNontoa','_blank');
          },
          github: () => {
            window.open('https://github.com/CamiloHamon-95/telemarketingHamonNontoa','_blank');
          },
          youtube: () => {
              window.open('https://www.youtube.com/@CamiloHamon', '_blank');
          }
        };
        break;
      case 5:
        actions = {
          linkProject: () => {
            window.open('https://github.com/CamiloHamon-95/running-data-analyst','_blank');
          },
          github: () => {
            window.open('https://github.com/CamiloHamon-95/running-data-analyst','_blank');
          },
          youtube: () => {
              window.open('https://www.youtube.com/@CamiloHamon', '_blank');
          }
        };
        break;
      case 6:
        actions = {
          linkProject: () => {
            window.open('https://github.com/CamiloHamon-95/duties-backend','_blank');
          },
          github: () => {
            window.open('https://github.com/CamiloHamon-95/duties-backend','_blank');
          },
          youtube: () => {
              window.open('https://www.youtube.com/@CamiloHamon', '_blank');
          }
        };
        break;
      default:
        break;
    }

    if (actions[nameProject]) {
        actions[nameProject]();
    }
  };

  return (
    <div className='ct-project-description'>
      <h2>{title}</h2>
      <div className='project-text-and-link'>
        <p>{content}</p>
        <div className='ct-project-links'>

          <a
            onClick={() => clickProject(project,'linkProject')}
          >
            <span>Visit the project</span>
          </a>
          {/* <div className='svg-icon-project'
            onClick={() => clickProject(project,'youtube')}
          >
            <TodoIcon
              type='youtube'
            />
          </div> */}
          <div className='svg-icon-project'
            onClick={() => clickProject(project,'github')}
          >
            <TodoIcon
              type='github'
            />
          </div>
        </div>
      </div>
    </div>
  )
};
  
export { ProjectDescription };