import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class StrainItem extends Component {
    render() {
        return (
            <>
                <Link to={`./strainDetail?id=${this.props.strain.id}`}>
                    <section>
                        <div>
                            <ul>
                                <li>Grower: {this.props.strain.grower}</li>
                                <li>On Sale: {this.props.strain.on_sale ? 'Yes' : 'No'}</li>
                                <li>Description: {this.props.strain.description}</li>
                                <li>Category: {this.props.strain.category}</li>
                                <li>Price: ${this.props.strain.price}</li>
                            </ul>
                        </div>
                        {console.log(this.props.strain)}
                        <h1>{this.props.strain.name}</h1>
                        <img src={this.props.strain.image} alt={this.props.strain.name} />
                    </section>
                </Link>
            </>
        )
    }
}
