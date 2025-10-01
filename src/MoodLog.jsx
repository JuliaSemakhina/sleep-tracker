import React from 'react';
import { useGlobalContext } from './context.jsx';

function MoodLog() {
  const { entries } = useGlobalContext();
  const sortedData = [...entries.sort((a, b) => new Date(b.date) - new Date(a.date))];
  return (
    <div className='container mood_log'>
      <h2 className='entry_data'>Данные настроения за все дни:</h2>
      <ul>
        {entries.length === 0 && (
          <li className="placeholder">
            <strong>2024-06-21</strong>:
            Настроение: <img className="mood_img" src={import.meta.env.BASE_URL + `/images/нейтральное.png`} alt="neutral" />,
            Проблемы: Нет, Сон: 7.5 ч.
          </li>
        )}
        {sortedData.map((entry, index) => (
          <li key={index}>
            <strong className='entry_data'>{entry.date}</strong>:
            Настроение: <img className="mood_img" src={import.meta.env.BASE_URL + `/images/${entry.mood}.png`} />,
            Проблемы: {entry.problems ? "Да" : "Нет"},
            Сон: {entry.sleep} ч.,
            Мысли: {entry.notes}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoodLog;
