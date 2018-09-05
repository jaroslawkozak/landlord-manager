import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import NewPropertyForm from './components/forms/NewPropertyForm.js'
import PropertiesPage from './components/pages/PropertiesPage.js'
import SidebarMenu from './components/menus/SidebarMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="top-bar">

          </div>
        </header>
        <Router>
          <div className="contentContainer">
            <SidebarMenu/>
          <div className="content">
              <div className="container">
                <Route exact path="/dashboard" component={NewPropertyForm} />
                <Route exact path="/" component={NewPropertyForm} />
                <Route path="/properties" component={PropertiesPage} />
              </div>
            
          </div>
          </div>
        </Router>
        <footer className="footer">
        foot
        </footer>
      </div>
    );
  }
}

export default App;
