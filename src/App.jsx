import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar.jsx';
import MobileMenu from './MobileMenu.jsx';
import Home from "./Home";
import MoodLog from "./MoodLog";

function App() {

    return (
        <Router basename='/sleep-tracker'>
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

