import React, { useState} from 'react';

const Content = ({ entries }) =>{

  return (
    <div>
         <h2>Мои записи</h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            <strong>{entry.date}</strong>: 
            Сон: {entry.sleep}ч, 
            Настроение: {entry.mood}, 
            Проблемы с ИИ: {entry.aiProblems ? "Да" : "Нет"}
            Заметка: {entry.notes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;