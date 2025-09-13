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
import kind from './images/kind.png';
import melting from './images/melting.png';
import ok from './images/ok.png';

export const quotes = [
  {quote: "Каждый день ставит нас перед выбором. Убедитесь, что тот, который вы сделали, действительно ваш",
    source:  "Эмили Марутян"},
    {quote: "Не позволяйте вчерашнему дню занимать слишком много места в сегодняшнем",
      source: "Уилл Роджерс"
  },
  {
    quote: "Вы никогда не будете по-настоящему удовлетворены работой, пока не будете удовлетворены жизнью",
    source: "Хизер Шук"
  },
   {
    quote: "Время, потерянное с удовольствием, не считается потерянным",
    source: "Джон Леннон"
  },
   {
    quote: "Если любишь жизнь, не теряй времени. Время есть то, из чего сделана жизнь",
    source: "Брюс Ли"
  },
   {
    quote: "Единственное время, которое есть у вас — сейчас; единственное место — здесь",
    source: "Ошо"
  },
   {
    quote: "Не тратьте своё время на избиение стены, в надежде сделать из неё дверь",
    source: "Коко Шанель"
  },
   {
    quote: "В жизни как в кресле у зубного врача: всё время кажется, что главное ещё будет, а оно уже позади",
    source: "Отто фон Бисмарк"
  },
   {
    quote: "Всю свою жизнь я искал истину. И единственное, о чём я жалею, это о потраченном времени, чтобы в итоге понять: истина в том, что истины нет… Живите и наслаждайтесь жизнью, не задавая ей вопросов",
    source: "Энтони Хопкинс"
  },
   {
    quote: "Жизнь коротка, и поэтому не следует терять времени, нужно наслаждаться ею",
    source: "Лао-цзы"
  },
   {
    quote: "Средний человек озабочен тем, как бы ему убить время, человек же талантливый стремится его использовать",
    source: "Артур Шопенгауэр"
  },
   {
    quote: "Времени мы хотим больше всего, но используем его хуже всего",
    source: "Уильям Пенн"
  },
   {
    quote: "Вам не всегда нужен план. Иногда достаточно просто выдохнуть, поверить, отпустить и посмотреть, что будет",
    source: "Мэнди Хэйл"
  },
   {
    quote: "Время бесплатно, но бесценно. Ты не можешь владеть им, но можешь использовать. Потерял — не вернуть никогда",
    source: "Харви МакКей"
  },
   {
    quote: "Начни жить прямо сейчас и считай каждый день отдельной жизнью",
    source: "Сенека"
  },
   {
    quote: "Плохая новость в том, что время летит незаметно. Хорошая — ты пилот",
    source: "Майкл Альтшулер"
  },
   {
    quote: "Смысл жизни — жить её, наслаждаться каждым опытом по полной, стремиться с нетерпением и без страха к новым, более богатым впечатлениям",
    source: "Элеонора Рузвельт"
  },
   {
    quote: "Наслаждайся этим, потому что это происходит",
    source: "Стивен Чбоски"
  },
   {
    quote: "В конце концов имеют значение не прожитые годы, а то, сколько жизни было в этих годах",
    source: "Авраам Линкольн"
  },
   {
    quote: "Тайна жизни — это не проблема, которую нужно решить, а реальность, которую нужно прожить",
    source: "Фрэнк Герберт"
  },
   {
    quote: "Простые вещи — самые удивительные, и только мудрым дано это увидеть",
    source: "Пауло Коэльо"
  },
   {
    quote: "Живём мы всего лишь раз, но если прожить правильно, этого одного раза вполне достаточно",
    source: "Мэй Уэст"
  },
   {
    quote: "Жизнь — это то, что с тобой происходит, пока ты занят построением планов",
    source: "Джон Леннон"
  },
   {
    quote: "Находи время, чтобы наслаждаться мелочами, ведь однажды ты оглянешься назад и поймёшь, что именно они были чем‑то великим",
    source: "Роберт Броулт"
  },
   {
    quote: "Секрет здоровья ума и тела не в том, чтобы оплакивать прошлое, не в том, чтобы беспокоиться о будущем, а в том, чтобы жить настоящим мудро и искренне",
    source: "Будда"
  }
];

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
        { value: "happy", emoji: "😉", label: "Хорошее", img: happy},
        { value: "neutral", emoji: "😐", label: "Нейтральное", img: neutral },
        { value: "sad", emoji: "😞", label: "Плохое", img: sad },
        { value: "thinking", emoji: "🤔", label: "В раздумьях", img: thinking},
        { value: "cat", emoji: "😺", label: "У меня лапки", img: cat},
        { value: "surprised", emoji: "😮", label: "Озадачен", img: surprised},
      ];
  // 🤗😊😥