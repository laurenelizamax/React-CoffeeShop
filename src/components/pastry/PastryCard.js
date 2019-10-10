import React, { Component } from 'react';
import { Card, CardText, CardTitle, Button, CardImg } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PastryCard.css'

class PastryCard extends Component {
    render() {
        return (
            <Card className="pastryCard">
                <CardImg top width="100%" src={require('../Images/croissant.jpg')} alt="coffee" />
                <CardTitle>Name: {(this.props.pastry.name)}</CardTitle>
                <CardText>Description: {(this.props.pastry.description)} </CardText>
                <CardText>Price: {(this.props.pastry.price)} </CardText>
                <Button className="pastryBtn" type="button" size="sm" onClick={() => { this.props.history.push(`/pastry/${this.props.pastry.id}`) }}>Details</Button>
                {/* <Button className="coffeeBtn" type="button" size="sm" onClick={() => this.props.deleteCoffee(this.props.coffee.id)}>Delete</Button> */}
            </Card>
        )
    }
}
export default PastryCard