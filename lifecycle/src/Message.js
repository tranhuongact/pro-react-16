import React, { Component } from 'react'
import ActionButton from './ActionButton'

export default class Message extends Component {

    componentDidMount() {
        console.log("componentDidMount Message Component")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate Message Component")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount Message Component")
    }

    render() {
        return (
            <div>
                <ActionButton theme="primary" {...this.props} />
                <div className="h5 text-center p-2" id="messageDiv">
                    {this.props.message}
                </div>
            </div>
        )
    }
}