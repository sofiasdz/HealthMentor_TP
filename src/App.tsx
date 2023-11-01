import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
import Texfield from "./components/Textfield"
import NavItem from "./components/NavItem";
import {AddMedication} from "./screens/AddMedication";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <AddMedication></AddMedication>
      </header>
    </div>
  );
}

export default App;
