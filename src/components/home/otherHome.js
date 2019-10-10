import React, { Component } from 'react';
import CoffeeManager from '../modules/CoffeeManager'
import PastryManager from '../modules/PastryManager'
import CoffeeList from '../coffee/CoffeeList'
import PastryList from '../pastry/PastryList'
// import StoreList from '../stores/StoreList'

class Home extends Component {
    state = {
        allPastries: [],
        allCoffee: [],
        allStores: []
    }
    componentDidMount() {
        APIManager.getAll("pastries", "coffee").then((allPastries, allCoffee) => {
            this.setState({
                allPastries: allPastries,
                allCoffee: allCoffee
            })
        })
    }
    render() {
        return (
            <>
            <div>
                <CoffeeList />
            </div>
            <div>
                <PastryList />
            </div>
        </>
        )}
 }

 export default Home



   // componentDidMount() {
    //     PastryManager.getAll("pastries").then((allPastries) => {
    //         this.setState({
    //             allPastries: allPastries,
    //         })
    //     })
}