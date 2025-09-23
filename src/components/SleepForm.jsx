import React from 'react';
import { useGlobalContext } from '../context.jsx';
import Input from './Input.jsx';

const SleepForm = () => {
  const { handleChange, formData } = useGlobalContext();

  return (
    <div className='container_form sleep'>
      <h2>Как долго длился сон?</h2>
      <Input
        label="Сон (часы):"
        type="number"
        id="sleep"
        name="sleep"
        value={formData.sleep}
        onChange={handleChange}
        min={2}
        max={15}
        step={0.5}
        required
      />
    </div>
  );
};

export default SleepForm;
