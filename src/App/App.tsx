import React, { useState } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import s from './App.module.scss';

const App = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <div className={s.mainContainer}>
      <div className={s.sidebarContainer}>
        <div className={s.sidebar}>
          <ul>
            <li className={s.navItem}>
              <div onClick={toggleSideMenu} className={s.link}>
                Sidebar <ArrowRightIcon />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${s.sideMenu} ${isSideMenuOpen ? s.open : s.closed}`}>
        <ul>
          <li>Menu element 1</li>
          <li>Menu element 2</li>
        </ul>
      </div>
      <div className={s.contentContainer}>
        <h1>Content Area</h1>
        <p>This is the main content of the page.</p>
      </div>
    </div>
  );
};

export default App;
