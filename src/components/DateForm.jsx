import React from 'react';
import { useGlobalContext } from '../context.jsx';
import Input from './Input.jsx';

const DateForm = () => {
    const { handleChange, formData } = useGlobalContext();
  return (
    <div className='container_form date'>
    <h2>Choose the date of your mood</h2>
        <Input
      label=" Дата: "
      type="date"
      id="date"
      name="date"
      value={formData.date}
      onChange={handleChange}
      required
    />
    </div>
  );
};

export default DateForm;
