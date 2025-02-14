import React, { Component } from 'react';
import CoffeeCard from "./CoffeeCard"
import CoffeeManager from '../modules/CoffeeManager'
import './CoffeeList.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; import './CoffeeList.css'

class CoffeeList extends Component {
    state = {
        coffees: [],
        modal: false,
        loadingStatus: false
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewCoffee = evt => {
        evt.preventDefault();
        if (this.state.coffeeName === "" || this.state.description === "" || this.state.price === "") {
            window.alert("Please input");
        } else {
            this.setState({ loadingStatus: true });
            const coffee = {
                name: this.state.coffeeName,
                description: this.state.description,
                price: this.state.price
            };

            CoffeeManager.post(coffee)
                .then(() => this.getData());
        }
    };

    getData = () => {
        CoffeeManager.getAll()
            .then((coffees) => {
                this.setState({
                    coffees: coffees
                })
            })
    }
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <>
                <div>
                    <Button color="info" onClick={this.toggle} >{this.props.buttonLabel} Add Coffee </Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Add Coffee</ModalHeader>
                        <ModalBody>
                            <form>
                                <fieldset>
                                    <div className="coffeeForm">
                                        <label htmlFor="coffeeName">Coffee:</label>
                                        <input
                                            type="text"
                                            required
                                            onChange={this.handleFieldChange}
                                            id="coffeeName"
                                            placeholder="Coffee"
                                        />
                                        <label htmlFor="description">Description:</label>
                                        <input
                                            type="text"
                                            required
                                            onChange={this.handleFieldChange}
                                            id="description"
                                            placeholder="Description"
                                        />
                                        <label htmlFor="price">Price:</label>
                                        <input
                                            type="text"
                                            required
                                            onChange={this.handleFieldChange}
                                            id="price"
                                            placeholder="Price"
                                        />
                                    </div>
                                </fieldset>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="info" disabled={this.state.loadingStatus}
                                onClick={(evt) => {
                                    this.constructNewCoffee(evt)
                                    this.toggle()
                                }}>Add Coffee</Button>{' '}
                            <Button color="success" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div>
                    <h1> Coffee List</h1>
                    <div className="coffeeList">
                        {
                            this.state.coffees.map(coffee =>
                                <CoffeeCard key={coffee.id}
                                    coffee={coffee}
                                    deleteCoffee={this.deleteCoffee}
                                    {...this.props} />
                            )
                        }
                    </div>
                </div>
            </>
        )
    }
}
export default CoffeeList