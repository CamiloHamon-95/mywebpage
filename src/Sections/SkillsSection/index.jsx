import React from 'react';
import { SkillsFrame } from './SkillsFrame';

import './SkillsSection.css';
//'One ring to rule them all, one ring to find them, one ring to bring them all and in the darkness bind them'
// Four rings forged in ancient fires, now united in one to command unrivaled power.
function SkillsSection () {
    return (
      <section  id='skills'>
        <div className="general-title">
          <h1>
            Skills
            <span>
                Arsenal
            </span>
          </h1>
        </div>
        <div className='div-boxes'>
          <SkillsFrame className='logo-box'
            skillsName='backend'
          />
          <SkillsFrame className='logo-box'
            skillsName='frontend'
          />
          <SkillsFrame className='logo-box'
            skillsName='database-ms'
          />
          <SkillsFrame className='logo-box'
            skillsName='tools'
          />
        </div>
      </section>
    )
  };
  
  export { SkillsSection };