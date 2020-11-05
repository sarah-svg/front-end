import React, { Component } from 'react'
import request from 'superagent';

console.log('hello');

const NewUser = {
    userId: 1
};
export default class CreateColorPage extends Component {
    state = {
        levels: []
    }

    componentDidMount = async () => {
        const response = await request.get('https://frozen-island-79303.herokuapp.com/levels');
        this.setState({ levels: response.body });
        console.log(response.body);
    }
        handleSubmit = async (e) => {
        e.preventDefault();
        const newColor = {
                cool_factor_id: this.state.coolId,
                name: this.state.name,
                owner_id: NewUser.userId,
                cool: this.state.cool,
            };
            await request
            .post('https://frozen-island-79303.herokuapp.com/colors')
            .send(newColor);
            this.props.history.push('/detailPage');
    }

    handleColorChange = (e) => {
        this.setState({ coolId: e.target.value });
    }
    handleCoolChange = (e) => {
        this.setState({ cool: e.target.value });
    }

    render() {
        return (
            <div>Create a Color to add to the page.
            
                    <form onSubmit={this.handleSubmit}>
                    <label>name
                    <input onChange={e => this.setState({ name: e.target.value})} />
                    </label>
                    <label>
                    <select onChange={this.handleColorChange}>
                            {
                            this.state.levels.map(level => <option key={level.id} value={level.id}>
                                {level.id}
                                </option>)
                            }
                        </select>  
                            <select onChange={this.handleCoolChange}>
                            
                                <option value="true">true</option>
                                <option value="false">false</option>
                            </select>
                            
                    </label>
                    <button>ADD COLOR</button>
                </form>
            </div>
        )
    }
}


