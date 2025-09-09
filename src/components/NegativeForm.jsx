import React from 'react';
import { useGlobalContext } from '../context.jsx';
import Input from './Input.jsx';

function NegativeForm() {
    const { handleChange, formData } = useGlobalContext();
  return (
    <div className='container_form thoughts'>
    <h2>Describe your thoughts and feelings</h2>
      <Input
        label="Были проблемы? :"
        type="checkbox"
        id="negative"
        name="problems"
        onChange={handleChange}
        required />

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
          placeholder="Add hastags separated by comma"
          required />
    </div>
  );
}

export default NegativeForm;


    {/* <div>
       <label className="checkbox-label">
        Были проблемы?
        <input
          type="checkbox"
          name="problems"
          checked={formData.problems}
          onChange={handleChange}
        />
      </label>
        <label>
        Заметки:
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Что сегодня было важного?"
        />
      </label>
    </div> */}