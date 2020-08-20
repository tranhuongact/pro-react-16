import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadData } from '../data/ActionCreators'
import { DataTypes } from '../data/types'
import Shop from './Shop'

class ShopConnector extends Component {

    componentDidMount() {
        this.props.loadData(DataTypes.CATEGORIES)
        this.props.loadData(DataTypes.PRODUCTS)
    }

    filterProducts = (products = [], category) =>
        (!category || category === "All")
            ? products
            : products.filter(p => p.category.toLowerCase() === category.toLowerCase())


    render() {
        return (
            <Switch>
                <Route path='/shop/products/:category?'
                    render={(routeProps) =>
                        <Shop {...this.props} {...routeProps}
                            products={this.filterProducts(this.props.products, routeProps.match.params.category)}
                        />
                    }
                />
                <Redirect to='/shop/products' />
            </Switch>
        )
    }
}

const mapStateToProps = (dataStore) => ({
    ...dataStore
})

const mapDispatchToProps = {
    loadData
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopConnector)