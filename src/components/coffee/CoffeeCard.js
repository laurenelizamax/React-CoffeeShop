import React, { Component } from 'react';
import { Card, CardText, CardTitle, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CoffeeCard.css'

class CoffeeCard extends Component {
    render() {
        return (
            <Card className="coffeeCard">
                    <CardTitle>Name: {(this.props.coffee.name)}</CardTitle>
                    <CardText>Description: {(this.props.coffee.description)} </CardText>
                    <CardText>Price: {(this.props.coffee.price)} </CardText>
                    <Button className="coffeeBtn" color="success" size="sm" onClick={() => {this.props.history.push(`/coffee/${this.props.coffee.id}`)}}>Details</Button>
                    <Button className="coffeeBtn" color="info" type="button" size="sm" onClick={() => this.props.deleteCoffee(this.props.coffee.id)}>Delete</Button>
                </Card>
                )
            }
        }
export default CoffeeCard