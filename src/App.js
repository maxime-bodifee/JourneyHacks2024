import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user/:id" element={<UserProfile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
