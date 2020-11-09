import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Home extends Component {
    render() {
        return (
            <div>
                <Link className="link" to="./strainlist" >See our inventory<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKgc7h_3YPGLLwFIDorS-6fLaOLXzXyy5xYg&usqp=CAU" alt="weed"/>
                </Link> 
                <Link className="link" to="./addStrain">Add strains<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUiPrmQurZUlWsTRcM9IxGcN7lFl7dtbLl6g&usqp=CAU"
                alt="weed"></img>
                </Link> 
            </div>
        )
    }
}
