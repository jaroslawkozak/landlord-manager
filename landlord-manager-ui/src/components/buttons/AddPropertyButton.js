import React, { Component } from 'react';
import { Tooltip } from 'reactstrap';
import addImage from '../../images/add.svg'
import addImageGreen from '../../images/add-green.svg'
import './buttons.css'

class AddPropertyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
           imgSrc: addImage
        };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
      }

    handleMouseOver() {
        this.setState({
            imgSrc: addImageGreen
        });
    }

    handleMouseOut() {
        this.setState({
            imgSrc: addImage
        });
    }

    render() {
        return (
            <div className="buttonWrapper addButton">
                <div className="iconWrapper">
                    <img className="icon" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc}
                        alt="add property"/>
                </div>      
            </div>
        )
    }
}

export default AddPropertyButton;