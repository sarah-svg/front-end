import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class StrainItem extends Component {
    render() {
        return (
            <>
                <Link to={`./strainDetail?id=${this.props.strain.id}`}>
                    <section className="product">    
                        {console.log(this.props.strain)}
                        <h1>{this.props.strain.name}</h1>
                        <img src={this.props.strain.image} alt={this.props.strain.name} />
                        <div>
                            <section className="hid">
                                <p>Grower: {this.props.strain.grower}</p>
                                <p>On Sale: {this.props.strain.on_sale ? 'Yes' : 'No'}</p>
                                <p>Description: {this.props.strain.description}</p>
                                <p>Category: {this.props.strain.category}</p>
                                <p>Price: ${this.props.strain.price}</p>
                            </section>
                        </div>
                    
                    </section>
                </Link>
            </>
        )
    }
}
