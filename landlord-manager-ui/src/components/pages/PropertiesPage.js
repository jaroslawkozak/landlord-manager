import React, { Component } from 'react';
import PropertyButton from '../buttons/PropertyButton.js';
import AddPropertyButton from '../buttons/AddPropertyButton.js'
import './pages.css'

class PropertiesPage extends Component {
    render() {
        var prop1 = {   "street" : "Staropogońska 80/31",
                        "id" : "1"
    }
        var prop2 = {   "street" : "Urbanowicz",
                        "id" : "2"
        }
        return (
            <div className="propertiesWrapper">
                <PropertyButton property={prop1}/>
                <PropertyButton property={prop2}/>
                <AddPropertyButton />
            </div>
        )
    }
}

export default PropertiesPage;