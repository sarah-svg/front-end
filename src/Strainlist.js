import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import { fetchStrains } from './fetch.js';

export default class Strainlist extends Component {
    state = {
        strains: []
    }
    fetchStrains = async () => {
        const response = await fetchStrains();
        await this.setState({
            strains: response
        });
    }
    componentDidMount = async () => {
        await this.fetchStrains();
    }
    render() {
        return (
            <div className="strains">
                <Link to="/"></Link>
                <Link to="/addStrain">
                    <button>add strain</button>
                </Link>
                
                <div className="strainList">
                    {this.state.strains.map((strain, i) => {
                        
                    })}
                </div>


            </div>
        )
    }
}
