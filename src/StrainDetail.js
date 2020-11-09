import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { fetchStrain, fetchGrowers, updateStrain, deleteStrain } from './fetch';


export default class StrainDetail extends Component {

    state = {
        growers: [],
        strains: {},
        id: (new URL(document.location)).searchParams.get('id')
    }
    componentDidMount = async () => {
        const growersResponse = await fetchGrowers();
        this.setState({ growers: growersResponse });
        const strainsResponse = await fetchStrain(this.state.id);
        await this.setState({ strains: strainsResponse });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        const newStrain = {
            id: this.state.id,
            name_id: e.target[0].value,
            name: e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value,
            category: e.target[4].value,
            price: e.target[5].value,
            on_sale: e.target[6].value,
            grower_id: e.target[7].value
        };

        await updateStrain(this.state.id, newStrain);
        this.props.history.push('strainList');
        console.log('strains');

    }

    handleDelete = async (e) => {
        e.preventDefault();
        await deleteStrain(this.state.id);
        this.props.history.push('strainList');
    }

    render() {
        return (
            <div className="updatePage">
                <h1>Update</h1>
                <form className="update" onSubmit={this.handleSubmit}>
                    <label>Name ID: <input type="text" id="name_id" name="name_id" defaultValue={this.state.strains.name_id} onChange={this.handleChange} /></label>
                    <label>Name: <input type="text" id="name" name="name" defaultValue={this.state.strains.name} onChange={this.handleChange} /></label>
                    <label>Image: <input type="text" id="image" name="image" defaultValue={this.state.strains.image} onChange={this.handleChange} /></label>
                    <label>Description: <input type="text" id="description" defaultValue={this.state.strains.description} name="description" onChange={this.handleChange} /></label>
                    <label>Category: <input type="text" id="category" name="category" defaultValue={this.state.strains.category} onChange={this.handleChange} /></label>
                    <label>Price: <input type="text" id="price" name="price" defaultValue={this.state.strains.price} onChange={this.handleChange} /></label>
                    <label>On Sale: <select name="on_sale" id="on_sale" defaultValue={this.state.strains.on_sale} onChange={this.handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select></label>
                    <label>Grower: <select name="grower" id="grower" defaultValue={this.state.strains.growers} onChange={this.handleChange}>
                        {
                            this.state.growers.map(grower => <option key={grower.id} value={grower.id}>
                                {grower.grower}
                            </option>)
                        }
                    </select></label>
                    <input type="submit" value="Submit" />
                </form>
                <button onClick={this.handleDelete}>Delete </button>
                <Link to={`/strains/${this.props.strains}`}>
                    <button>Return To strain List</button>
                </Link>
                <Link to="/">Home</Link>
            </div>

        )
    }
}
