import React, { useState } from 'react';
import WelcomeForm from './WelcomeForm.jsx';
import useModal from './useModal.jsx';
import Modal from './Modal.jsx';
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
import Tabs from "./Tabs.jsx";
import { quotes } from './data.jsx';

function Home() {
  
  const { formData, resetForm, setActiveTab, getAverage, entries, setEntries } = useGlobalContext();
  const { isShowing, open, close } = useModal();

const random =()=> quotes[Math.floor(Math.random() * quotes.length)];
const [quote] = useState(()=>random());

const sortedData = [...entries.sort((a, b) => new Date(b.date) - new Date(a.date))];
const sortedReverseData = [...entries.sort((a, b) => new Date(a.date) - new Date(b.date))];

const recentArray = (key) => {
    const newArr = sortedReverseData.map(e=> e[key]).slice(-6, -1);
    return newArr;
  };

const newestEntry = sortedData[0];

  const addEntry = (newEntry) => {
    setEntries(prev => [...prev, newEntry]);
    console.log(entries);
  };


function sleepAverage (arr){
  const sum = arr.reduce((a, b) => a + b);  
const avg = sum / arr.length; 
return avg;
};

 const sleepSafe =(arr)=>{
  if(arr.length >=5) {
    if(sleepAverage(arr) < newestEntry.sleep) {
      return `Вы спали больше обычного (в среднем ${sleepAverage(arr)} за последние 5 записей)`;
    } else if (sleepAverage(arr) > newestEntry.sleep) {
      return `Вы сали меньше обычного (в среднем ${sleepAverage(arr)} за последние 5 записей)`;
    } else {
      return `Вы спали обычное количество часов (в среднем ${sleepAverage(arr)} за последние 5 записей)`;
    }
  } else {
    return 'Not enough entries';
  };
};

 const moodAverage =(arr, key)=>{
  if(arr.length >=5) {
    if (getAverage(arr, key) === newestEntry.mood) {
      return `Настроение не изменилось по сранвнению со средним значением: ${getAverage(arr, key)} (за последние 5 записей)`;
    } else {
      return `Настроение изменилось по сранвнению со средним значением: ${getAverage(arr, key)} (за последние 5 записей)`;
    };
  } else {
    return 'Not enough entries';
  }
};

const sleepOverview = () => sleepSafe(recentArray("sleep"));
const moodOverview = () => moodAverage(entries.slice(-6, -1), "mood");

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
    <WelcomeForm />
    <div className='modal-container'>
    <button className='log_btn' onClick={open}>Log Mood</button>
     <Modal show={isShowing} onClose={close}>
     <Tabs onEntrySubmit={handleSubmit} />
     </Modal>
    </div>

  {entries.length > 0 && (
    <div className='data_container'>
    <div className='container_first'>
          <div className='mood_container id="mood'>
         
            <div className='current_mood'>I'm feeling <br/> <h2>{newestEntry.mood}</h2></div>
            <div className='current_quote'><BiSolidQuoteLeft /> <br/>{`${quote.quote} - ${quote.source}`}</div>
         
          <div className='img_container'>
            <img className='mood_img' src={`/src/images/${newestEntry.mood}.png`} />
          </div>
    </div>
    <div className='thoughts_container'>
      <div className='sleep_data' id='sleep'>
      <div>
        <GiNightSleep />
        <h4> Sleep</h4>
      </div>
        <h3>{entries[entries.length-1].sleep} <span>hours</span></h3>
      </div>
      <div className='thoughts_data' id='thoughts'>
      <div>
        <BsStars /> 
        <h4>Reflection of the day</h4>
      </div>
        <p>{entries[entries.length-1].notes}</p>
        <p>{getWords(entries[entries.length-1].hashtags)}</p>
      </div>
    </div>
    </div>
    
    <div className='container_second' id='average'>
      <div className='average_data'>
        <div className='average'>
          <h4>Average Mood <span>(Last 5 check-ins)</span></h4>
          <div className='avg_container mood'>
          <div>
          <FaRegSmileWink />
            <h3>{newestEntry.mood}</h3>
          </div>
            <p>{moodOverview()}</p>
          </div>
        </div>
        <div className='average'>
          <h4>Average Sleep <span>(Last 5 check-ins)</span></h4>
          <div className='avg_container sleep'>
          <div>
            <GiNightSleep />
            <h3>{newestEntry.sleep} Hours</h3>
          </div>
            <p>{sleepOverview()}</p>
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

export default Home;