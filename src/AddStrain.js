import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fetchGrowers, createStrain } from './fetch.js';

export default class AddStrain extends Component {
    state = {
        growers: [],
    }
    componentDidMount = async () => {
        const response = await fetchGrowers();
        this.setState({ growers: response });
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        const newStrain = {
            name_id: e.target[0].value,
            name: e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value,
            category: e.target[4].value,
            price: e.target[5].value,
            on_sale: e.target[6].value,
            grower_id: e.target[7].value
        };

        await createStrain(newStrain);
        this.props.history.push('strainlist')

    }

    render() {
        return (
            <div>
                <h1>Add New Strain</h1>
                <form id='add-form' className="column" onSubmit={this.handleSubmit}>
                    <label>Name ID: <input type="text" id="name_id" name="name_id" defaultValue="star killer" onChange={this.handleChange} /></label>
                    <label>Name: <input type="text" id="name" name="name" defaultValue="Star killer" onChange={this.handleChange} /></label>
                    <label>Image: <input type="text" id="image" name="image" onChange={this.handleChange} /></label>
                    <label>Description: <input type="text" id="description" defaultValue="1oz star killer" name="description" onChange={this.handleChange} /></label>
                    <label>Category: <input type="text" id="category" name="category" defaultValue="Indica" onChange={this.handleChange} /></label>
                    <label>Price: <input type="text" id="price" name="price" defaultValue="200" onChange={this.handleChange} /></label>
                    <label>On Sale: <select name="on_sale" id="on_sale" onChange={this.handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select></label>
                    <label>Grower: <select name="grower" id="grower" onChange={this.handleChange}>
                        {
                            this.state.growers.map(grower => <option key={grower.id} value={grower.id}>
                                {grower.grower}
                            </option>)
                        }
                    </select></label>
                    <input type="submit" value="Submit" />
                </form>

                <Link className="links" to="./strainList">
                    <button>Return to strain Page</button>
                </Link>
            </div>
        )
    }
}
