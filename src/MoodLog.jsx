import React from 'react';
import { useGlobalContext } from './context.jsx';

function MoodLog() {
  const { entries } = useGlobalContext();
  return (
    <div className='container mood_log'>
      <h2>Here is your mood log:</h2>
            <ul>
        {entries.length === 0 && (
    <li className="placeholder">
      <strong>2024-06-21</strong>: 
      Настроение: <img className="mood_img" src="/src/images/neutral.png" alt="neutral" />, 
      Проблемы: Нет, Сон: 7.5 ч.
    </li>
  )}
        {entries.map((entry, index) => (
          <li key={index}>
            <strong>{entry.date}</strong>: 
            Настроение: <img className="mood_img" src={`/src/images/${entry.mood}.png`} />, 
            Проблемы: {entry.problems ? "Да" : "Нет"},
            Сон: {entry.sleep} ч.
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoodLog;
