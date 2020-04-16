import React from 'react';
import Weather from './components/Weather';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/css/bulma.css'

function App() {
  
  return (
    
    <div className="App">
    <h1 className="title is-1">React to Weather 😀</h1>
    <Weather />
    </div>
  );
}

export default App;
