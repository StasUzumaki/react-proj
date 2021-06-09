import React from 'react';
import logo from './logo.svg';
import ez from './ez.gif';
import './App.css';
import Appbar from './Appbar';
import Fcomponent from './Fcomponent';
import Classcomponent from './Classcomponent';
import Menu from './Menu';
import Drinks from './Drinks';
import Formcomponent from './Formcomponent';

function App() {
  return (
    <div className="App">
      <Appbar />
      
      <header className="App-header">

        <Drinks />
        {/*<Formcomponent />
        <Fcomponent />
        <Menu />*/}
       
        <img src={ez} className="App-ez" alt="gif" />
        <p>
         <h1>Bruh...</h1>
        </p>
      </header>
    </div>
  );
}

export default App;
//<img src={logo} className="App-logo" alt="logo" />