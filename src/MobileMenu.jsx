import React from 'react';
import logo from './images/mood.png';
import user_pic from './images/user.jpg';
import { useGlobalContext } from './context.jsx';

const MobileMenu = () => {
    const { isMenuOpen, toggleMenu } = useGlobalContext();
  return (
      <aside className={`menu ${isMenuOpen ? 'show' : ""}`}>
      <div className='sidebar'>
      <img className='logo' src={logo} alt="site-logo" />
      <div className='user_id'>
                  <img alt='user_picture' src={user_pic} className='user_pic'/>
      </div>
        <div className="links">
          <a className='tracker_link' href='#' onClick={toggleMenu}>Your Mood</a>
          <a className='tracker_link' href='#' onClick={toggleMenu}>Your Sleep</a>
          <a className='tracker_link' href='#' onClick={toggleMenu}>Your Thoughts</a>
          <a className='tracker_link' href='#' onClick={toggleMenu}>Your Stats</a>
        </div>
        {/* <img className='logo' src={logo} alt="planet-logo" /> */}
      </div>
    </aside>
  );
};

export default MobileMenu;
