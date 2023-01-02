
import './App.css';
import React from 'react';
import Navbar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Myread from './components/Myread';
import Membership from './components/Membership';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/myread' element={<Myread/>}/>
        <Route exact path='/membership' element={<Membership/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;


