import React, { useState, useContext } from 'react';
import useLocalStorage from "./useLocalStorage";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const [userName, setUserName] = useLocalStorage('user', ["пользователь"]);
  const formClosed = () => setIsOpened(false);
  const formShown = () => setIsOpened(true);
  const [entries, setEntries] = useLocalStorage("entry", []);

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

  const handleChange = (e) => {
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
      entries,
      setEntries
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