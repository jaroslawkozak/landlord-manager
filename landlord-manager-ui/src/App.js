import React, { Component } from 'react';
import './App.css';
import NewPropertyForm from './components/forms/NewPropertyForm.js'
import PropertyButton from './components/buttons/PropertyButton.js'
import AddPropertyButton from './components/buttons/AddPropertyButton.js'

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
          <AddPropertyButton/>
          <PropertyButton label="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"/>
          <NewPropertyForm/>
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
