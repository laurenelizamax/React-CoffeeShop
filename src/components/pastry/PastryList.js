import React, { Component } from 'react';
import PastryCard from "./PastryCard"
import PastryManager from '../modules/PastryManager'
import './PastryList.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class PastryList extends Component {
    state = {
        pastries: [],
        modal: false,
        loadingStatus: false

    }
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewPastry = evt => {
        evt.preventDefault();
        if (this.state.pastryName === "" || this.state.description === "" || this.state.price === "") {
            window.alert("Please input a title and due date");
        } else {
            this.setState({ loadingStatus: true });
            const pastry = {
                name: this.state.pastryName,
                description: this.state.description,
                price: this.state.price
            };

            PastryManager.post (pastry)
            .then(() => this.getData());
        }

    };
    getData = () => {
        PastryManager.getAll()
            .then((pastries) => {
                this.setState({
                    pastries: pastries
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
                    <Button color="info" onClick={this.toggle} >{this.props.buttonLabel} Add Pastry </Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Add New Pastry</ModalHeader>
                        <ModalBody>
                            <form>
                                <fieldset>
                                    <div className="pastryForm">
                                        <label htmlFor="pastryName">Pastry:</label>
                                        <input
                                            type="text"
                                            required
                                            onChange={this.handleFieldChange}
                                            id="pastryName"
                                            placeholder="Pastry"
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
                                    this.constructNewPastry(evt)
                                    this.toggle()}}>Add Pastry</Button>{' '}
                            <Button color="success" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                <h1> Pastry List</h1>
                <div className="pastryList">
                    {this.state.pastries.map(pastry => <PastryCard
                                                                             key={pastry.id}
                                                                             pastry={pastry}
                                                                             deletePastry={this.deletePastry}
                                                                            {...this.props} />)}
                </div>
            </>
        )
    }
}

export default PastryList