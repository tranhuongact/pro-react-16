import React, { Component } from 'react'
import ActionButton from './ActionButton'

export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            names: ['Tran', 'Diem', 'Huong']
        }
    }

    reverseList = () => {
        this.setState({name: this.state.names.reverse()})
    }

    render() {
        return (
            <div>
                <ActionButton callback={this.reverseList} text="Reverse Names" />
                {this.state.names.map((name, index) => {
                    return <h5 key={`${name} - ${index}`}>{name}</h5>
                })}
            </div>
        )
    }
}