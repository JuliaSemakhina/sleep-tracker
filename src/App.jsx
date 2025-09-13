import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Navbar from './Navbar.jsx';
import MobileMenu from './MobileMenu.jsx';
import { useGlobalContext } from './context.jsx';
import Home from "./Home";
import MoodLog from "./MoodLog";

function App() {

    // localStorage.clear();

    return (

        <Router>
            <Navbar />
            <MobileMenu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/moodlog" element={<MoodLog />} />
            </Routes>
        </Router>
    );
};

export default App;

