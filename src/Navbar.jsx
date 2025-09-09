import React from 'react';
// import { NavLink } from "react-router-dom";
import logo from './images/mood.png';
import user_pic from './images/user.jpg';
import { useGlobalContext } from './context.jsx';
import { Squash as Hamburger } from 'hamburger-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import UserForm from './UserForm.jsx';
import useLocalStorage from "./useLocalStorage";

const Navbar = () => {
const { setIsMenuOpen, isMenuOpen, formShown, formClosed, setUserName } = useGlobalContext();
// const [userName, setUserName] = useLocalStorage('user', []);

const handleUserName = (name) =>{
  setUserName(name);
  console.log(name);
  // fetch('/api/user', { method: 'POST', body: JSON.stringify(name) });
};

  return (
    <nav>
      <div className="nav-links">
      <div className='nav-logo'>
        <img className='logo' src={logo} alt="site-logo" />
        <h1>mood tracker</h1>
      </div>
      
        <div className="links">
          <a className='tracker_link'>Your Mood</a>
          <a className='tracker_link'>Your Sleep</a>
          <a className='tracker_link'>Your Thoughts</a>
          <a className='tracker_link'>Your Stats</a>
          <a className='tracker_link'>Your Log</a>
        </div>

        <div className='user_id'>
            <img onClick={formShown} alt='user_picture' src={user_pic} className='user_pic'/>
        </div>

        <UserForm isClosed={formClosed} onSave={handleUserName}/>

        <button className='burger-btn'>
          <Hamburger label="Show menu" rounded size={26} toggled={isMenuOpen} toggle={setIsMenuOpen}/>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;

