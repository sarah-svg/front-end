import React, { Component } from 'react'
import fetch from 'superagent';
import ColorLevel from './ColorLevel.js';

export default class DetailPage extends Component {
    state = {
        colors: [],
     
    }
     componentDidMount = async () => {
        this.fetchColor();
    } 

    fetchColor = async () => {
        const response = await fetch.get(`https://frozen-island-79303.herokuapp.com/colors`);
    
        this.setState({
            colors: response.body
            
        });
    }
   
    
    render() {
        return (
            <div className="colors">
                {this.state.colors.map((color, i) => {
                    return <ColorLevel key = {i} color = {color}/>
                })}
                
            </div>
        )
    }
}
