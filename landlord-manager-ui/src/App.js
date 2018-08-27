import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="top-bar">

          </div>
        </header>
        <div className="contentContainer">
        <div className="sidebar">
          <ul className="nav flex-column">
            <li>
              Dashboard
            </li>
            <li>
              Properties
            </li>
            <li>
              Rentals
            </li>
            <li>
              Tenants
            </li>
            <li>
              Finances
            </li>
            <li>
              Analysis
            </li>
          </ul>
        </div>

        <div className="content">

        </div>

        

        </div>
        <footer className="footer">
        foot
        </footer>
      </div>
    );
  }
}

export default App;
