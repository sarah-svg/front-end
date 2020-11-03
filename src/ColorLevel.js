import React, { Component } from 'react'

export default class ColorLevel extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.color.name}</h4>
                <ul>
                    <li>
                        Name:{this.props.color.name}
                    </li>
                    <li>
                        Cool Factor:{this.props.color.cool_factor}
                    </li>
                
                
                
                </ul>
            </div>
        )
    }
}
