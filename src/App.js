import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fcomponent from './Fcomponent';
import Classcomponent from './Classcomponent';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fcomponent />
        <Classcomponent />
        <Menu />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <h1>Hello Den!</h1>
        </p>
      </header>
    </div>
  );
}

export default App;
