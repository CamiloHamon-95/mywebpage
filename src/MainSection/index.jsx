import { IntroSection } from '../Sections/IntroSection';
import { SkillsSection } from '../Sections/SkillsSection';
import { ProjectsSection } from '../Sections/ProjectsSection';
import { AboutSection } from '../Sections/AboutSection';
import { ContactSection } from '../Sections/ContactSection';
import React from 'react';
import './MainSection.css';

function MainSection ({theme}) {
  return (
    <main className={`main theme-${theme}`}>
        < IntroSection />
        < SkillsSection />
        < ProjectsSection />
        < AboutSection />
        < ContactSection />
    </main>
  )
};

export { MainSection };
