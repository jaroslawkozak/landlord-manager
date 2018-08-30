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
        return (
            <div className="buttonWrapper">
                <div className="iconWrapper">
                    <img className="icon" src={ houseOutline } alt="property"/>
                </div>      
                <div className="buttonLabel">
                    <span id="TooltipExample">{this.props.label}</span>
                    <Tooltip placement="top-start" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
                        {this.props.label}  
                    </Tooltip>
                </div>
            </div>
        )
    }
}

export default PropertyButton;