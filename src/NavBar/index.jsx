import { TodoIcon } from '../TodoIcon';
import { Link } from 'react-scroll';
import React from 'react';
import './navbar.css';

function NavBar ({theme, setTheme, menuState, setMenuState}) {

  const toogle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const clicked_menu = () => {
    setMenuState(!menuState);
  };

  const clickIcon = (nameSite) => {
    const actions = {
        github: () => {
          window.open('https://github.com/CamiloHamon-95','_blank');
        },
        linkedin: () => {
          window.open('https://linkedin.com/in/camilohamon95/', '_blank');
        },
        youtube: () => {
            window.open('https://www.youtube.com/@CamiloHamon', '_blank');
        },
        cv: () => {
            window.open('https://drive.google.com/file/d/1TccZ2q7EPmjS59f8OUBsVMw-AxInDpai/view?usp=sharing', '_blank');
        }
    };

    if (actions[nameSite]) {
        actions[nameSite]();
    }
  };

  return (
    <nav className={`navbar theme-${theme}`}>
        <ul className={`ul-icons theme-${theme}`}>
          <li
            onClick={ () => toogle_mode() }
          >
            <TodoIcon
              type={ theme === 'light' ? 'light-mode' : 'dark-mode' }
            />
          </li>
          <li
            onClick={ () => clickIcon('github') }
          >
            <TodoIcon
              type='github'
            />
          </li>
          <li
            onClick={ () => clickIcon('linkedin') }
          >
            <TodoIcon
              type='linkedin'
            />
          </li>
          {/* <li
            onClick={ () => clickIcon('youtube') }
          >
            <TodoIcon
              type='youtube'
            />
          </li> */}
          <li
            onClick={ () => clickIcon('cv') }
          >
            <TodoIcon
              type='cv'
            />
          </li>
        </ul>
        <ul className={`ul-sections theme-${theme} ${menuState ? 'menu-active' : ''}`} >
            <li>
              <Link
                to='presentation'
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={800}
              >
                Home
              </Link>
            </li>
            <li>
                <Link
                  to='skills'
                  spy={true} 
                  smooth={true} 
                  offset={-80} 
                  duration={800}
                >
                  Skills
                </Link>
            </li>
            <li>
              <Link
                to='projects'
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={800}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to='about'
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={800}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='contact'
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={800}
              >
                Contact
              </Link>
            </li>
        </ul>
        <div
          className={`div-menu theme-${theme}`}
          onClick={ clicked_menu }
        >
          <TodoIcon
            type={ menuState ? 'x' : 'menu' }
          />
        </div>
    </nav>
  )
};

export { NavBar };
