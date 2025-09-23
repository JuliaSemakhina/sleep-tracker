import React from 'react';
import { tabs } from './data';
import { useGlobalContext } from './context.jsx';

const Tabs = ({ onEntrySubmit }) => {
  const { setActiveTab, activeTab } = useGlobalContext();
  const tabsCount = tabs.length;
  return (
    <>
      <h2>Внеси своё настроение</h2>
      <div className="tab__header">
        {tabs.map((tab, index) => (
          <li
            className={`tab__button ${index === activeTab && 'active'}`}
            key={tab.id}
            onClick={() => setActiveTab(index)}
          >
          </li>
        ))}
      </div>

      <div className="tab__container " >
        <form onSubmit={onEntrySubmit} className="tab__content">
          {tabs[activeTab].component}
          <button
            className='tab_btn'
            type={activeTab !== tabsCount - 1 ? "button" : "submit"}
            onClick={(e) => {
              if (activeTab !== tabsCount - 1) {
                e.preventDefault();
                setActiveTab(activeTab + 1);
              }
            }}
          >
            {activeTab !== tabsCount - 1 ? "Далее" : "Завершить"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Tabs;

