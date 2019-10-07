import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import CoffeeList from '../coffee/CoffeeList'
import CoffeeDetails from '../coffee/CoffeeDetails'


class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>
                <Route exact path="/coffee" render={(props) => {
                    return <CoffeeList {...props} />
                }} />
                <Route exact path="/coffee/:coffeeId(\d+)" render={(props) => {
          return <CoffeeDetails coffeeId={parseInt(props.match.params.coffeeId)} {...props} />
        }} />
                </React.Fragment>
        )
    }
}

export default ApplicationViews