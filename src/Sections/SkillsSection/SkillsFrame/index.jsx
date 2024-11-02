import DjangoSVG from '../../../assets/django.svg?react';
import FlaskSVG from '../../../assets/flask.svg?react';
import PythonSVG from '../../../assets/python.svg?react';
import FastApiSVG from '../../../assets/fastapi.svg?react';
import ReactJsSVG from '../../../assets/react.svg?react';
import JavaScriptSVG from '../../../assets/javascript.svg?react';
import HtmlSVG from '../../../assets/html.svg?react';
import CssSVG from '../../../assets/css.svg?react';
import MongoSVG from '../../../assets/mongodb.svg?react';
import MySqlSVG from '../../../assets/mysql.svg?react';
import FirebaseSVG from '../../../assets/firebase.svg?react';
import PostgreSVG from '../../../assets/postgresql.svg?react';
import DockerSVG from '../../../assets/docker.svg?react';
import GitSVG from '../../../assets/git.svg?react';
import AwsSVG from '../../../assets/aws2.svg?react';
import LinuxSVG from '../../../assets/linux.svg?react';
import './SkillsFrame.css';
import React from 'react';

const iconTypes = {
    'frontend': [
        <ReactJsSVG key='react-svg' className="svg-skills" />,
        <JavaScriptSVG key='javascript-svg' className="svg-skills" />,
        <HtmlSVG key='html-svg' className="svg-skills" />,
        <CssSVG key='css-svg' className="svg-skills" />
    ],
    'backend': [
        <DjangoSVG key='django-svg' className="svg-skills" />,
        <FlaskSVG key='flask-svg' className="svg-skills" />,
        <PythonSVG key='python-svg' className="svg-skills" />,
        <FastApiSVG key='fast-svg' className="svg-skills" />
    ],
    'database-ms': [
        <MongoSVG key='mongo-svg' className="svg-skills" />,
        <MySqlSVG key='mysql-svg' className="svg-skills" />,
        <FirebaseSVG key='firebas-svg' className="svg-skills" />,
        <PostgreSVG key='postgre-svg' className="svg-skills" />
    ],
    'tools': [
        <DockerSVG key='docker-svg' className="svg-skills" />,
        <GitSVG key='git-svg' className="svg-skills" />,
        <AwsSVG key='aws-svg' className="svg-skills" />,
        <LinuxSVG key='linux-svg' className="svg-skills" />
    ]
  };

  const phrases = {
    'frontend': 'One ring to rule them all...',
    'backend': 'One ring to find them...',
    'database-ms': 'One ring to bring them all...',
    'tools': 'And in the darkness bind them!'
  };
  
  function SkillsFrame({ skillsName }) {
  
    return (
        <div className={`div-skills ${skillsName}`}>
            <div className="skills-title">
                <h1>
                    { skillsName.toUpperCase() }
                    <span>
                        {phrases[skillsName]}
                    </span>
                </h1>
            </div>
            {/* <div className='title-group-skills'>
                <p>{ skillsName.toUpperCase() }</p>
            </div> */}
            <div className='group-skills-icons'>
                {iconTypes[skillsName]}
            </div>
        </div>
    )
  }
  
  export { SkillsFrame };