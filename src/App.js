
import React from 'react';
import Navber from './Components/Navber';
import {BrowserRouter} from 'react-router-dom'
import './App.css';

function App() {
  return (
      <div  className='App'>
      <BrowserRouter>
      <Navber/>
      </BrowserRouter>
      
      </div>
  );
}

export default App;
