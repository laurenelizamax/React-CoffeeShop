import React, { Component } from 'react';
import { Card, CardText, CardTitle, Button, CardImg } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CoffeeCard.css'

class CoffeeCard extends Component {
    render() {
        return (
            <Card className="coffeeCard">
                <CardImg top width="100%" src={require('../Images/coffee.jpg')} alt="coffee" />
                <CardTitle>Name: {(this.props.coffee.name)}</CardTitle>
                <CardText>Description: {(this.props.coffee.description)} </CardText>
                <CardText>Price: {(this.props.coffee.price)} </CardText>
                <Button className="coffeeBtn" type="button" size="sm" onClick={() => { this.props.history.push(`/coffee/${this.props.coffee.id}`) }}>Details</Button>
                <Button className="coffeeBtn" type="button" size="sm" onClick={() => this.props.deleteCoffee(this.props.coffee.id)}>Delete</Button>
            </Card>
        )
    }
}
export default CoffeeCard