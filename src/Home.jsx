import React, { useState } from 'react';
import WelcomeForm from './WelcomeForm.jsx';
import useModal from './useModal.jsx';
import Modal from './Modal.jsx';
import { useGlobalContext } from './context.jsx';
import { BiSolidQuoteLeft } from "react-icons/bi";
import { GiNightSleep } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { FaRegSmileWink } from "react-icons/fa";
import { PiSmileyWinkFill } from "react-icons/pi";
import { PiSmileySadFill } from "react-icons/pi";
import { PiSmileyFill } from "react-icons/pi";
import { PiSmileyBlankFill } from "react-icons/pi";
import { PiSmileyMehFill } from "react-icons/pi";
import { PiSmileyXEyesFill } from "react-icons/pi";
import { BsFillEmojiSmileUpsideDownFill } from "react-icons/bs";
import { PiLegoSmileyFill } from "react-icons/pi";
import { PiScanSmileyFill } from "react-icons/pi";
import { PiSmileyMeltingFill } from "react-icons/pi";
import { PiCatFill } from "react-icons/pi";
import Tabs from "./Tabs.jsx";
import { quotes } from './data.jsx';

function Home() {

  const { formData, resetForm, setActiveTab, entries, setEntries } = useGlobalContext();
  const { isShowing, open, close } = useModal();

  const random = () => quotes[Math.floor(Math.random() * quotes.length)];
  const [quote] = useState(() => random());

  const sortedData = [...entries.sort((a, b) => new Date(b.date) - new Date(a.date))];
  const sortedReverseData = [...entries.sort((a, b) => new Date(a.date) - new Date(b.date))];

  const recentArray = (key) => {
    const newArr = sortedReverseData.map(e => e[key]).slice(-6, -1);
    return newArr;
  };

  const newestEntry = sortedData[0];

  function clearLog() {
    if (confirm('Вы уверены, что хотите стереть все внесённые дни?')) {
      localStorage.clear();
      location.reload();
    }
  }

  const addEntry = (newEntry) => {
    setEntries(prev => [...prev, newEntry]);
    console.log(entries);
  };

   //Average data
  function getAverage(arr, key) {
    const freq = arr.reduce((m, o) => {
      const v = o[key];
      m[v] = (m[v] || 0) + 1;
      return m;
    }, {});

    let maxVal = null;
    let maxCnt = 0;
    for (const [value, count] of Object.entries(freq)) {
      if (count > maxCnt) {
        maxCnt = count;
        maxVal = value;
      };
    };
    return maxVal;
  };

  // const modeSafe = (arr, key) => {
  //   return arr.length > 5 ? getAverage(arr, key) : 'Not enough entries';
  // };

    //In case therea two equal frequent entries
  function getModes(arr, key) {
    const freq = arr.reduce((m, o) => {
      const v = o[key];
      m[v] = (m[v] || 0) + 1;
      return m;
    }, {});

    const maxCnt = Math.max(...Object.values(freq));
    return Object.keys(freq).filter(k => freq[k] === maxCnt);
  };

  function sleepAverage(arr) {
    const sum = arr.reduce((a, b) => a + b);
    const avg = sum / arr.length;
    return avg;
  };

  const sleepSafe = (arr) => {
    if (arr.length >= 5) {
      if (sleepAverage(arr) < newestEntry.sleep) {
        return `Вы спали больше обычного (согласно последним 5 записям)`;
      } else if (sleepAverage(arr) > newestEntry.sleep) {
        return `Вы спали меньше обычного (согласно последним 5 записям)`;
      } else {
        return `Вы спали как обычно (согласно последним 5 записям)`;
      }
    } else {
      return 'Недостаточно записей';
    };
  };

  const moodAverage = (arr, key) => {
    if (arr.length >= 5) {
      if (getAverage(arr, key) === newestEntry.mood) {
        return `Настроение не изменилось по сранвнению со средним занчением`;
      } else {
        return `Настроение изменилось по сранвнению со средним занчением`;
      };
    } else {
      return 'Недостаточно записей';
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
    if (hours <= 8.5) return '#59df67ff';
    if (hours <= 9.5) return '#42A5F5';
    return '#7E57C2';
  };

  const getBarMood = (mood) => {
    if (mood === "грустное") return <PiSmileySadFill />;
    if (mood === "хорошее") return <PiSmileyFill />;
    if (mood === "нейтральное") return <PiSmileyBlankFill />;
    if (mood === "в_раздумьях") return <PiSmileyMehFill />;
    if (mood === "озадачен") return <PiLegoSmileyFill />;
    if (mood === "я_устал") return <PiSmileyMeltingFill />;
    if (mood === "всё_ок") return <PiSmileyWinkFill />;
    return <PiCatFill />;
  };

  function barHeight(height) {
    const h = ((height / 12) * 260) / 16;
    return h;
  }

  const getWords = (word) => {
    const result = word.split(", ").map(num => "#" + num).join(" ");
    return result;
  };

  const splitWords = (line) => {
    return line.replace(/_/g, " ");
  };

  return (

    <div className="container">
      <WelcomeForm />
      <div className='modal-container'>
        <button className='log_btn' onClick={open}>Внести настроение</button>
        <button className='clear' onClick={clearLog}>Очистить записи</button>
        <Modal show={isShowing} onClose={close}>
          <Tabs onEntrySubmit={handleSubmit} />
        </Modal>
      </div>

      {entries.length > 0 && (
        <div className='data_container'>
          <div className='container_first'>
            <div className='mood_container id="mood'>

              <div className='current_mood'>Моё настроение сегодня:<br /> <h2 className="entry_data">{splitWords(newestEntry.mood)}</h2></div>
              <div className='current_quote'><BiSolidQuoteLeft /> <br />{`${quote.quote} - ${quote.source}`}</div>

              <div className='img_container'>
                <img className='mood_img' src={import.meta.env.BASE_URL + `/src/images/${newestEntry.mood}.png`} />
              </div>
            </div>
            <div className='thoughts_container'>
              <div className='sleep_data' id='sleep'>
                <div>
                  <GiNightSleep />
                  <h4>Сон</h4>
                </div>
                <h3 className="entry_data">{entries[entries.length - 1].sleep} <span className="entry_data">{entries[entries.length - 1].sleep > 4 ? "часов" : "часа"}</span></h3>
              </div>
              <div className='thoughts_data' id='thoughts'>
                <div>
                  <BsStars />
                  <h4>Мысли за день</h4>
                </div>
                <p className="entry_data">{entries[entries.length - 1].notes}</p>
                <p className="entry_data">{getWords(entries[entries.length - 1].hashtags)}</p>
              </div>
            </div>
          </div>

          <div className='container_second' id='average'>
            <div className='average_data'>
              <div className='average'>
                <h4>Среднее значение настроения <span>(последние 5 записей)</span></h4>
                <div className='avg_container mood'>
                  <div>
                    <FaRegSmileWink />
                    <h3>{entries.length < 3 ? splitWords(newestEntry.mood) : splitWords(getAverage(entries.slice(-6, -1), "mood"))}</h3>
                  </div>
                  <p>{moodOverview()}</p>
                </div>
              </div>
              <div className='average'>
                <h4>Среднее значение сна <span>(последние 5 записей)</span></h4>
                <div className='avg_container sleep'>
                  <div>
                    <GiNightSleep />
                    <h3>{entries.length < 3 ? newestEntry.sleep : sleepAverage(recentArray("sleep"))} Часов/Часа</h3>
                  </div>
                  <p>{sleepOverview()}</p>
                </div>
              </div>
            </div>
            <div className='charts_container'>
              <h2>График настроение и сна по дням</h2>
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
                        title={`${e.date} – ${e.sleep}ч`}
                        style={{
                          height: `${barHeight(e.sleep)}em`,
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