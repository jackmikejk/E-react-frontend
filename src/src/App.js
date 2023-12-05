import React from 'react';
import './App.css';
import './index.css';
import Footer from "./components/Footer.js";
import Slider from './components/Slider.js';
import Card from './components/CardUI.jsx';

//import Title from './components/Title';

function App() {
  return (
    <div className='app-container'>
      <div className='slider-container'>
        <Slider/>
      </div> 
      
        <Card/>
         
        <div className='footer'>
          <Footer/>
        </div>    
      </div>
    
  );
}

export default App;

//<Title/>