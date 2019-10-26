import React from 'react';
import Functional from './components/Functional.js';
import './App.css';
import Select from './components/Select.js';
import Tabbed from './components/Tabbed.js';

function App() {
  return (
    <div className="App">
      <Functional />
      <Select />
      <Tabbed />
    </div>
  );
}

export default App;
