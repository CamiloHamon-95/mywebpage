import React from 'react';
import IconLight from '../assets/dark-mode.svg?react';
import IconDark from '../assets/light-mode.svg?react';
import IconGitHub from '../assets/github.svg?react';
import IconLinkedIn from '../assets/linked.svg?react';
import IconYouTube from '../assets/youtube.svg?react';
import IconMenu from '../assets/menu.svg?react';
import IconX from '../assets/delete.svg?react';
import IconCurriculum from '../assets/curriculum.svg?react';
import './TodoIcon.css';

const iconTypes = {
  'light-mode': () => <IconLight className="Icon-svg" />,
  'dark-mode': () => <IconDark className="Icon-svg" />,
  'github': () => <IconGitHub className="Icon-svg" />,
  'linkedin': () => <IconLinkedIn className="Icon-svg" />,
  'youtube': () => <IconYouTube className="Icon-svg" />,
  'cv': () => <IconCurriculum className="Icon-svg" />,
  'menu': () => <IconMenu className="Icon-svg svg-menu-x" />,
  'x': () => <IconX className="Icon-svg svg-menu-x" />
};

function TodoIcon({ type }) {

  return (
    iconTypes[type]()
  )
}

export { TodoIcon };