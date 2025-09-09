import React from 'react';
import MoodForm from './components/MoodForm.jsx';
import DateForm from './components/DateForm.jsx';
import SleepForm from './components/SleepForm.jsx';
import NegativeForm from './components/NegativeForm.jsx';
import dictionary from './images/logo.png';
import movie from './images/logo.png';
import quiz from './images/logo.png';
import todo from './images/logo.png';
import happy from './images/happy.png';
import sad from './images/sad.png';
import neutral from './images/neutral.png';
import cat from './images/cat.png';
import surprised from './images/surprised.png';
import thinking from './images/thinking.png';

export const petData = [
    {
      animal: "Cheetah",
      fact: "Cheetahs are the fastest land animals, capable of reaching speeds up to 75 mph.",
      image: dictionary,
    },
    {
      animal: "Koala",
      fact: "Koalas sleep around 20 hours a day and are known for their eucalyptus diet.",
      image: quiz,
    },
    {
      animal: "Elephant",
      fact: "Elephants have the largest brains among land animals and demonstrate remarkable intelligence.",
      image: movie,
    },
    {
      animal: "Zebra",
      fact: "Zebras have distinctive black and white stripes that act as a natural defense against predators.",
      image: todo,
    },
    {
      animal: "Horse",
      fact: "Horses have excellent memory and are capable of recognizing human emotions.",
      image: quiz,
    },
  ];


export const tabs = [
   {
    id: 'date',
    title: 'Date',
    component: <DateForm />,
    isFilled: false
  },
  {
    id: 'sleep',
    title: 'Sleep',
    component: <SleepForm />,
    isFilled: false
  },
  {
    id: 'mood',
    title: 'Mood',
    component: <MoodForm />,
    isFilled: false
  },
  {
    id: 'negatives',
    title: 'Negatives',
    component: <NegativeForm />,
    isFilled: false
  }
];

export const emotions =
  [
        { value: "happy", emoji: "😊", label: "Хорошее", img: happy},
        { value: "neutral", emoji: "😐", label: "Нейтральное", img: neutral },
        { value: "sad", emoji: "😞", label: "Плохое", img: sad },
        { value: "thinking", emoji: "🤔", label: "В раздумьях", img: thinking},
        { value: "cat", emoji: "😺", label: "У меня лапки", img: cat},
        { value: "surprised", emoji: "😮", label: "Озадачен", img: surprised},
      ];
  