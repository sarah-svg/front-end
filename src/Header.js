import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                Hi welcome to my color page.
                <img src="https://www.color-hex.com/palettes/76116.png" alt="cool tones" title="Hi welcome to my color page."/>
                <Link to="/detailPage">Detail
                </Link>
                <div></div>
                <Link to="/">Home
                </Link>
               
            </div>
        )
    }
}
