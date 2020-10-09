import React from 'react'
import {HooksButton} from './HooksButton'

export function Summary(props) {
    return(
        <React.Fragment>
            <td>{props.index + 1}.</td>
            <td>{props.name}</td>
            <td><HooksButton callbackSum={() => props.callback(props.name)} /></td>
        </React.Fragment>
    )
}