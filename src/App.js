import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import CreatePostPage from './pages/CreatePostPage';
import "./style.css";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user/:id" element={<UserProfile />} />
                    <Route path="/create" element={<CreatePostPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
