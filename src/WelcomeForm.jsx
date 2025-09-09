import React from 'react';
import cat from './images/cat_mood.png';
import { useGlobalContext } from './context.jsx';

const WelcomeForm = () => {
  const { userName } = useGlobalContext();
    const currentDate = new Date().toISOString().split("T")[0];
  return (
    <section className='welcome_container'>
    <div className="description">
      <h3>Hello, <span>{userName}</span>!</h3>
      <h2>Describe your Mood for Today...</h2>
      <p className='date'> <span>Today is:</span> {currentDate}</p>
    </div>
    <div className="welcome_img">
      <img className='cat_mood' src={cat} alt='girl with a cat balloon'/>
    </div>
    </section>
  );
};

export default WelcomeForm;
