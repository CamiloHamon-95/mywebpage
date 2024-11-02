import React from 'react';
import './Footer.css';

function Footer ({theme}) {
  return (
    <footer className={`theme-${theme}`}>
        <p>@2024 Camilo Hamon | ALL Rights Reserved</p>
    </footer>
  )
};

export { Footer };