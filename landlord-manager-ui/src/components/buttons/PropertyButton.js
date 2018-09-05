import React, { Component } from 'react';
import { Tooltip } from 'reactstrap';
import houseOutline from '../../images/house-outline.svg'
import './buttons.css'

class PropertyButton extends Component {
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
        var tooltip = "tooltip" + this.props.property.id;
        return (
            <div className="buttonWrapper">
                <div className="iconWrapper">
                    <img className="icon" src={ houseOutline } alt="property"/>
                </div>      
                <div className="buttonLabel">
                    <span id={tooltip}>{this.props.property.street}</span>
                    <Tooltip placement="top-start" isOpen={this.state.tooltipOpen} target={tooltip} toggle={this.toggle}>
                        {this.props.property.street}  
                    </Tooltip>
                </div>
            </div>
        )
    }
}

export default PropertyButton;