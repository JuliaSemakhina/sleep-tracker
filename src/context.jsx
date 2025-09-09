import React, { useState, useContext } from 'react';
import useLocalStorage from "./useLocalStorage";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    const [userName, setUserName] = useLocalStorage('user', ["User"]);
    const formClosed = () => setIsOpened(false);
    const formShown = () => setIsOpened(true);

function getAverage (arr, key){
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

const modeSafe =(arr, key)=>{
  return arr.length >5 ? getAverage(arr, key) : 'Not enough entries';
};

// const moodAv = () => modeSafe(entries, 'mood'); 

//In case therea two equal frequent entries
// function getModes(arr, key) {
//   const freq = arr.reduce((m, o) => {
//     const v = o[key];
//     m[v] = (m[v] || 0) + 1;
//     return m;
//   }, {});

//   const maxCnt = Math.max(...Object.values(freq));
//   return Object.keys(freq).filter(k => freq[k] === maxCnt);
// };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const defaultValues = {
         date: new Date().toISOString().split("T")[0],
    sleep: 0,
    mood: "neutral",
    problems: false,
    hashtags: "",
    notes: "",
  };

    const [formData, setFormData] = useState(defaultValues);

  const handleChange =(e)=>{
      const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const resetForm = () => setFormData(defaultValues);

    return (
        <AppContext.Provider value={{
           handleChange,
            formData,
             setFormData,
              toggleMenu,
               isMenuOpen,
                setIsMenuOpen,
                resetForm,
                activeTab,
                setActiveTab,
                formShown,
                formClosed,
                isOpened,
                userName,
                setUserName,
                modeSafe,
                getAverage
        }} >
            {children}
        </AppContext.Provider>
    );
};

//custom hook
// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };