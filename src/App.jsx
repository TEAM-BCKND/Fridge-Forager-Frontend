import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SignUp from './components/SignUp';  
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import Home from './components/Home';

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/search" element={<Search/>} />
            </Routes>
        </Router>
        // {/* Other components or content */}
    )
}
