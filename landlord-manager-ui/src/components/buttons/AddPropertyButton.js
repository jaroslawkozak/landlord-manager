import React, { Component } from 'react';
import { Tooltip } from 'reactstrap';
import addImage from '../../images/add.svg'
import addImageGreen from '../../images/add-green.svg'
import './buttons.css'

class AddPropertyButton extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
        tooltipOpen: false
        };
    }

    toggle() {
        this.setState({
        tooltipOpen: !this.state.tooltipOpen
        });
    }

    render() {
        return (
            <div className="buttonWrapper addButton">
                <div className="iconWrapper">
                    <img className="icon" src={ addImage } 
                        onMouseOver={ this.src = addImageGreen }
                        onMouseOut={ this.src = addImage } 
                        alt="add property"/>
                </div>      
            </div>
        )
    }
}


export default AddPropertyButton;