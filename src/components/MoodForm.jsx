import React from 'react';
import { useGlobalContext } from '../context.jsx';
import { emotions } from '../data';

const MoodForm = () => {
  const { handleChange, formData } = useGlobalContext();
  return (
    <div className='mood container_form'>
      <h2>Какое настроение сегодня?</h2>
      {emotions.map((option) => (
        <label key={option.value} className="mood-radio">
          <input
            className="mood_input"
            type="radio"
            name="mood"
            value={option.value}
            checked={formData.mood === option.value}
            onChange={handleChange}
          />
          <span className="radio_label"></span>
          <span className='mood_info'>{option.emoji} {option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default MoodForm;

