import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import SignUp from './components/SignUp.jsx';  
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<div>Home Page Content</div>} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </Router>
        // {/* Other components or content */}
    )
}
