import React, { Component } from 'react'

export default class ProductList extends Component {
    render() {
        if (this.props.products == null || this.props.products.length === 0) {
            return <h5 className="p-2">No Products</h5>
        }
        return (
            this.props.products.map(item =>
                <div className="card m-1 p-1 bg-light" key={item.id}>
                    <h4>
                        {item.name}
                        <span className="badge badge-pill badge-primary float-right">${item.price.toFixed(2)}</span>
                    </h4>
                    <div>
                        {item.description}
                    </div>
                </div>
            )
        )
    }
}