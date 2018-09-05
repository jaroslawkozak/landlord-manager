import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import './menus.css'

class SidebarMenu extends Component {
    render() {
        return (
            <div className="sidebar">
                <ul className="nav flex-column">
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/properties">Properties</Link>
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
        )
    }
}

export default SidebarMenu;