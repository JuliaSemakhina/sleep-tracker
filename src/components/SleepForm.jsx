import React from 'react';
import { useGlobalContext } from '../context.jsx';
import Input from './Input.jsx';

const SleepForm = () => {
const { handleChange, formData } = useGlobalContext();

  return (
   <div className='container_form sleep'>
   <h2>How long did you sleep?</h2>
        <Input
      label="Сон (часы):"
      type="number"
      id="sleep"
      name="sleep"
      value={formData.sleep}
      onChange={handleChange}
      min={0}
      max={24}
      step={0.5}
      required
    />
    </div>
  );
};

export default SleepForm;


// function getColor(hours) {
//   if (hours < 5)   return '#ef4444';   
//   if (hours < 7)   return '#f97316';   
//   if (hours < 9)   return '#22c55e';   
//   return '#3b82f6';                  
// }

// function Bar({ hours }) {
//   const style = {
//     width: '24px',
//     height: `${hours * 15}px`,        
//     backgroundColor: getColor(hours),
//   };
//   return <div style={style} />;
// }

// const getBarColor = (hours) => {
//   if (hours < 5)       return '#FF5252'; // мало
//   if (hours < 6.5)     return '#FFB74D'; // ниже нормы
//   if (hours <= 8.5)    return '#66BB6A'; // норма
//   if (hours <= 9.5)    return '#42A5F5'; // чуть выше нормы
//   return '#7E57C2';                    // много
// };

// import { getBarColor } from './utils';

// export default function SleepBar({ hours }) {
//   return (
//     <div
//       style={{
//         width: 40,
//         height: hours * 20, // 1 час = 20 px
//         backgroundColor: getBarColor(hours),
//         marginRight: 8,
//         borderRadius: 4,
//         transition: 'background-color 0.3s',
//       }}
//       title={`${hours} ч`}
//     />
//   );
// }

// {sleepEntries.map(e => (
//   <SleepBar key={e.id} hours={e.sleep} />
// ))}


// То же самое для Chart.js (заготовка)
// const colors = sleepEntries.map(e => getBarColor(e.sleep));

// const data = {
//   labels: sleepEntries.map(e => e.date),
//   datasets: [{
//     label: 'Часы сна',
//     data: sleepEntries.map(e => e.sleep),
//     backgroundColor: colors,
//     borderColor: colors,
//   }],
// };