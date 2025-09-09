import React, { useState, useEffect } from 'react';
// import TrackerForm from './TrackerForm';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
// import Content from './Content';
import useModal from './useModal';
import Modal from './Modal';
import WelcomeForm from './WelcomeForm';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { useGlobalContext } from './context.jsx';
import { BiSolidQuoteLeft } from "react-icons/bi";
import { GiNightSleep } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { FaRegSmileWink } from "react-icons/fa";
import { PiSmileySadFill } from "react-icons/pi";
import { PiSmileyFill } from "react-icons/pi";
import { PiSmileyBlankFill } from "react-icons/pi";
import { PiSmileyMehFill } from "react-icons/pi";
import { PiSmileyXEyesFill } from "react-icons/pi";
import { PiSmileyMeltingFill } from "react-icons/pi";
import { PiCatFill } from "react-icons/pi";
import Tabs from "./Tabs";
import useLocalStorage from "./useLocalStorage";


function App() {
  const [entries, setEntries] = useLocalStorage("entry", []);
  const { isShowing, open, close } = useModal();
  const { formData, resetForm, setActiveTab, getAverage } = useGlobalContext();

const sortedData = [...entries.sort((a, b) => new Date(b.date) - new Date(a.date))];
const sortedReverseData = [...entries.sort((a, b) => new Date(a.date) - new Date(b.date))];
const newestEntry = sortedData[0];
if (!newestEntry) {
  console.log("Массив пуст!");
} else {
  console.log("Последняя запись:", sortedData.map(e => e.mood).length);
};

  const addEntry = (newEntry) => {
    setEntries(prev => [...prev, newEntry]);
    // setEntries([...entries, newEntry]);
    console.log(entries);
  };


  // localStorage.clear();

  // const averValue = (key)=> {
  //   const dataEntry = entries.map(e => e.key);
  //   const startPosition = Math.max(dataEntry.length - 5, 1);
  //   if(dataEntry.length === 0){
  //     return newestEntry.key;
  //   } else if (dataEntry.length < 5){
  //     // return {просто среднее}
  //   }
  //   else if (dataEntry.length >= 5) 
  //     {
  //     return dataEntry.length.slice(startPosition);
  //     //the last 5 entries
  //   } else return;
  // };

// const dataMood = entries.map(e => e.mood);
// const averageValueMood = dataMood.reduce((previous, current, i, arr)=>
//        arr.filter((item) => item === previous).length >
//   arr.filter((item) => item === current).length
//     ? previous
//     : current
// );

 const modeSafe =(arr, key)=>{
  return arr.length >=5 ? getAverage(arr, key) : 'Not enough entries';
};

const sleepAv = () => modeSafe(entries, "sleep");

  // 0. Выводим текущее значение, но через формулу среднего (с учётом последних пяти записей).
  // 1. Узнать длину значений - если меньше 5 - недостаточно информации.
  // 2. Если длина нормальная- то высчитываем последние 5 записей, потом сравниваем среднее за эти 5 дней и текущее за день.
  // 3. Для настроения - если одинаково по сравнению со средним за 5 дней, то так и пишем, если нет - то ваше натсроение отличается от последних 5 дней.4. Для сна - если больше- вы спали больше ,чем в среднем за послдение 5 дней, если меньше - меньше..., если так же - и не больше -+ 30 минут, то вы спали так же как и прежние 5 дней.
  // 3 формулы - среднее (для сна и настроения за 5 дней), сравнение для сна и натсроения. 
//Нужна отдельная функция для определения последних пяти дней без последнего дня, чтобы потом ввести этот массив в общую функцию для сравнения. 

  const handleSubmit = (e) => {
    e.preventDefault();

        const newEntry = {
      id: crypto.randomUUID(),
      ...formData,
      sleep: Number(formData.sleep), 
    };

    addEntry(newEntry);
    setActiveTab(0);
    close();
    resetForm();
    console.log(newEntry);
  };

  const Y_TICKS = [0, 2, 4, 6, 8, 10, 12];

  const getBarColor = (hours) => {
  if (hours < 5) return '#FF5252'; 
  if (hours < 6.5) return '#FFB74D'; 
  if (hours <= 8.5) return '#66BB6A'; 
  if (hours <= 9.5) return '#42A5F5'; 
  return '#7E57C2';                    
};

const getBarMood = (mood) =>{
  if (mood === "sad") return <PiSmileySadFill />;
  if (mood === "happy") return <PiSmileyFill />;
  if (mood === "neutral") return <PiSmileyBlankFill />;
  if (mood === "thinking") return <PiSmileyMehFill />;
  if (mood === "surprised") return <PiSmileyXEyesFill />;
  return <PiCatFill />;
};

const getWords = (word) => {
  const result = word.split(", ").map(num => "#" + num).join(" ");
  return result;
};

  return (
    <div className="container">
    <Navbar />
    <MobileMenu />
    <WelcomeForm />
    <div className='modal-container'>
    <button className='log_btn' onClick={open}>Log Mood</button>
 <Modal show={isShowing} onClose={close}>
 <Tabs onEntrySubmit={handleSubmit} />
 </Modal>

    </div>
      {/* <TrackerForm onAddEntry={addEntry}/> */}
        {/* <Content entries={entries} /> */}
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

  {entries.length > 0 && (
    <div className='data_container'>
    <div className='container_first'>
          <div className='mood_container'>
         
            <div className='current_mood'>I'm feeling <br/> <h2>{newestEntry.mood}</h2></div>
            <div className='current_quote'><BiSolidQuoteLeft /> <br/>"Some citation here"</div>
         
          <div className='img_container'>
            <img className='mood_img' src={`/src/images/${newestEntry.mood}.png`} />
          </div>
    </div>
    <div className='thoughts_container'>
      <div className='sleep_data'>
      <div>
        <GiNightSleep />
        <h4> Sleep</h4>
      </div>
        <h3>{entries[entries.length-1].sleep} <span>hours</span></h3>
      </div>
      <div className='thoughts_data'>
      <div>
        <BsStars /> 
        <h4>Reflection of the day</h4>
      </div>
        <p>{entries[entries.length-1].notes}</p>
        <p>{getWords(entries[entries.length-1].hashtags)}</p>
      </div>
    </div>
    </div>
    <div className='container_second'>
      <div className='average_data'>
        <div className='average'>
          <h4>Average Mood <span>(Last 5 check-ins)</span></h4>
          <div className='avg_container mood'>
          <div>
          <FaRegSmileWink />
            <h3>{newestEntry.mood}</h3>
            {/* <h3>Neutral</h3> */}
          </div>
            {/* <p>Same as the previous 5 check-ins</p> */}
            <p>{entries.length >=5 ? getAverage(entries, "mood") : 'Not enough entries'}</p>
          </div>
        </div>
        <div className='average'>
          <h4>Average Sleep <span>(Last 5 check-ins)</span></h4>
          <div className='avg_container sleep'>
          <div>
            <GiNightSleep />
            <h3>5-6 Hours</h3>
          </div>
            <p>{sleepAv()}</p>
          </div>
        </div>
      </div>
      <div className='charts_container'>
      <h2>Mood and Sleep Trends</h2>
      <div className='chart'>
      <div className='y-chart'>
                {Y_TICKS.map(h => (
          <div key={h}>{h} ч</div>
        ))}
      </div>

        <div className='x-chart'>
          {sortedReverseData.map(e => (
          <div key={e.date} className='sleep_bar'>
          <div className='smile_chart'>{getBarMood(e.mood)}</div>
            <div className='bar'
              title={`${e.date} – ${e.sleep} ч`}
               style={{
                height: (e.sleep / 12) * 260, 
                backgroundColor: getBarColor(e.sleep)
              }}
            />
            <span 
            style={{ fontSize: 10, marginTop: 4 }}>
            {e.date.slice(-5)}</span>
          </div>
        ))}
        </div>
        </div>

      </div>
    </div>
    
    </div>
  )}
    </div>
  );
};

export default App;

// const [state, setState] = useState({
//   currentTabIndex: 0,
//   tabsData: [],
//   isModalOpen: false
// });

// {JSON.stringify(entries[entries.length-1].sleep, null, 2)}

// const [period, setPeriod] = useState('week'); // 'day' | 'week' | 'month'

// const visibleEntries = useMemo(() => {
//   const now = new Date();
//   return entries.filter(e => {
//     const d = new Date(e.date);
//     switch (period) {
//       case 'day':   return sameDay(d, now);
//       case 'week':  return withinLastDays(d, now, 7);
//       case 'month': return withinLastDays(d, now, 30);
//       default:      return true;
//     }
//   });
// }, [entries, period]);

// return (
//   <>
//     <select value={period} onChange={e => setPeriod(e.target.value)}>
//       <option value="day">День</option>
//       <option value="week">Неделя</option>
//       <option value="month">Месяц</option>
//     </select>

//     <SleepStrip entries={visibleEntries} />
//   </>
// );

// const sameDay = (a, b) =>
//   a.getFullYear() === b.getFullYear() &&
//   a.getMonth() === b.getMonth() &&
//   a.getDate() === b.getDate();

// const withinLastDays = (d, now, days) =>
//   (now - d) / (1000 * 3600 * 24) < days;


// const givenArray = [1, 2, 3, 4, 1, 1, 2, 3, 4];

// const maxValue = givenArray.reduce((previous, current, i, arr) =>
//   arr.filter((item) => item === previous).length >
//   arr.filter((item) => item === current).length
//     ? previous
//     : current
// );


// console.log(`Maximum occurrence value: ${maxValue}`);
