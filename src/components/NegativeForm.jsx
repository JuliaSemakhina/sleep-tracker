import React from 'react';
import { useGlobalContext } from '../context.jsx';
import Input from './Input.jsx';

function NegativeForm() {
  const { handleChange, formData } = useGlobalContext();
  return (
    <div className='container_form thoughts'>
      <h2>Опиши мысли за день</h2>
      <Input
        label="Были проблемы? :"
        type="checkbox"
        id="negative"
        name="problems"
        onChange={handleChange}
      />
      <>
        <label>
          Заметки:
          <textarea
            type="text"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            id="notes"
            placeholder="Что сегодня было важного?"
            required
          />
        </label>
      </>

      <Input
        label="Хэштеги: "
        type="text"
        name="hashtags"
        value={formData.hashtags}
        onChange={handleChange}
        id="hashtag"
        placeholder="Введи хэштеги через запятую"
        required />
    </div>
  );
}

export default NegativeForm;