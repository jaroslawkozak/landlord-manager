import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './NewPropertyForm.css'

class NewPropertyForm extends Component {
    render() {
        return (
            <div className="newPropertyFormContainer">
                <div className="newPropertyFormLabel">Add new property:</div>
                <Form>
                    <FormGroup row>
                    <Label for="propertyName" sm={2}>Name</Label>
                    <Col sm={10}>
                        <Input type="text" name="name" id="propertyName" placeholder="default name" />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="propertyType" sm={2}>Type</Label>
                    <Col sm={10}>
                        <Input type="select" name="type" id="propertyType">
                        <option>Flat</option>
                        <option>House</option>
                        <option>Garage</option>
                        <option>Office</option>
                        </Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="addressLabel" sm={2}>Address:</Label>
                    <Col sm={10}>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="addressCountry" sm={2}>Country</Label>
                    <Col sm={10}>
                        <Input type="text" name="country" id="addressCountry" placeholder="Poland" />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="addressCity" sm={2}>City</Label>
                    <Col sm={10}>
                        <Input type="text" name="city" id="addressCity" placeholder="" />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="addressStreet" sm={2}>Street</Label>
                    <Col sm={10}>
                        <Input type="text" name="street" id="addressStreet" placeholder="" />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="addressHouseNumber" sm={2}>House number</Label>
                    <Col sm={10}>
                        <Input type="text" name="houseNumber" id="addressHouseNumber" placeholder="11/1" />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="addressPostal" sm={2}>Postal</Label>
                    <Col sm={10}>
                        <Input type="text" name="postal" id="addressPostal" placeholder="" />
                    </Col>
                    </FormGroup>
                    <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button>Submit</Button>
                    </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default NewPropertyForm;