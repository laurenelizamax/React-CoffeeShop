import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import CoffeeList from '../coffee/CoffeeList'
import CoffeeDetails from '../coffee/CoffeeDetails'
import PastryList from '../pastry/PastryList'
import PastryDetails from '../pastry/PastryDetails'
import Home from '../home/Home'
import AddPastry from '../pastry/AddPastry'
import AddCoffee from '../coffee/AddCoffee'


class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route exact path="/coffee" render={(props) => {
                    return <CoffeeList {...props} />
                }} />
                <Route exact path="/coffee/:coffeeId(\d+)" render={(props) => {
                    return <CoffeeDetails coffeeId={parseInt(props.match.params.coffeeId)} {...props} />
                }} />
                <Route exact path="/coffees/new" render={(props) => {
          return <AddCoffee {...props} />
        }} />
                <Route exact path="/pastries/new" render={(props) => {
          return <AddPastry {...props} />
        }} />
                <Route exact path="/pastries" render={(props) => {
                    return <PastryList {...props} />
                }} />
                <Route exact path="/pastry/:pastryId(\d+)" render={(props) => {
                    return <PastryDetails pastryId={parseInt(props.match.params.pastryId)} {...props} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews