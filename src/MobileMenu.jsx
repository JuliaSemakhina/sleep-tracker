import React from 'react';
import { NavLink } from "react-router-dom";
import logo from './images/mood.png';
import { useGlobalContext } from './context.jsx';

const MobileMenu = () => {
  const { isMenuOpen, toggleMenu } = useGlobalContext();
  return (
    <aside className={`menu ${isMenuOpen ? 'show' : ""}`}>
      <div className='sidebar'>
        <img className='logo' src={logo} alt="site-logo" />
        <div className="links">
          <a className='tracker_link' href='#' onClick={toggleMenu}>Настроение</a>
          <a className='tracker_link' href='#' onClick={toggleMenu}>Сон</a>
          <a className='tracker_link' href='#' onClick={toggleMenu}>Мысли</a>
          <a className='tracker_link' href='#average' onClick={toggleMenu}>Статистика</a>
          <NavLink to="/" className={({ isActive }) => `tracker_link ${isActive ? "active" : ""}`} onClick={toggleMenu}>
            Домой
          </NavLink>
          <NavLink to="/moodlog" className={({ isActive }) => `tracker_link ${isActive ? "active" : ""}`} onClick={toggleMenu}>
            Дневник
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default MobileMenu;