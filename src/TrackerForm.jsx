import { useState } from 'react';
import './App.css';

const TrackerForm =({onAddEntry})=>{

  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0],
    sleep: 0,
    mood: "neutral",
    training: false,
    notes: ""
  });

  const handleChange =(e)=>{
      const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };


    const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      id: crypto.randomUUID(),
      ...formData,
      sleep: Number(formData.sleep), 
    };
    onAddEntry(newEntry);
    console.log(newEntry);
  };

return (
    <form onSubmit={handleSubmit} className="tracker-form">
      <label>
        Дата:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Сон (часы):
        <input
          type="number"
          name="sleep"
          value={formData.sleep}
          onChange={handleChange}
          min="0"
          max="24"
          step="0.5"
          required
        />
      </label>

      <label>
        Настроение:
        <select name="mood" value={formData.mood} onChange={handleChange}>
          <option value="happy">😊 Хорошее</option>
          <option value="neutral">😐 Нейтральное</option>
          <option value="sad">😞 Плохое</option>
        </select>
      </label>

      <label className="checkbox-label">
        Были проблемы с ИИ?
        <input
          type="checkbox"
          name="aiProblems"
          checked={formData.aiProblems}
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

      <button type="submit">Добавить запись</button>
    </form>
  );
};

export default TrackerForm;