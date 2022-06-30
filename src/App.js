import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";

import NavBar from "./NavBar";
import Home from './Home';
import Guides from './Guides'
import Reviews from './Reviews'
import Shop from './Shop'
import FAQ from './FAQ'
import Contact from './Contact';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
        <NavBar/>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/guides" element={<Guides />} />
          <Route exact path="/reviews" element={<Reviews />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/faq" element={<FAQ />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
     
    </div>
  );
}

export default App;
