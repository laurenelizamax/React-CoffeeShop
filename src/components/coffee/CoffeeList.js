import React, { Component } from 'react';
import CoffeeCard from "./CoffeeCard"
import APIManager from '../modules/APIManager';
import './CoffeeList.css'

class CoffeeList extends Component {
    state = {
        allCoffee: []
    }
    deleteCoffee = (id) => {
        APIManager.delete("coffees", id)
            .then(() => {
                APIManager.getAll("coffees")
                    .then((allCoffee) => {
                        this.setState({
                            allCoffee: allCoffee
                        })
                    })
            })
    }
    componentDidMount() {
        APIManager.getAll("coffees").then((allCoffee) => {
            this.setState({
                allCoffee: allCoffee
            })
        })
    }

    render() {
        return (
            <>
                <h1> COFFEE  LIST</h1>
                <div className="coffeeList">
                    {
                        this.state.allCoffee.map(coffee =>
                            <CoffeeCard key={coffee.id}
                                coffee={coffee}
                                deleteCoffee={this.deleteCoffee}
                                {...this.props} />
                        )
                    }
                </div>
            </>
        )
    }
}
export default CoffeeList