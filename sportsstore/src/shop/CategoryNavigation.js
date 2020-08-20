import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CategoryNavigation extends Component {
    render() {
        return (
            <React.Fragment>
                <Link className="btn btn-secondary btn-block" to={this.props.baseUrl}>All</Link>
                {this.props.categories && this.props.categories.map(cate =>
                    <Link className="btn btn-secondary btn-block" key={cate}
                        to={`${this.props.baseUrl}/${cate.toLowerCase()}`}>
                        {cate}
                    </Link>
                )}

            </React.Fragment>
        )
    }
}