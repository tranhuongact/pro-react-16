import React from 'react'

export default function CallbackButton(props) {
    return (
        <button className={`btn btn-${props.theme} mr-2`} onClick={props.callback}>
            {props.text}
        </button>
    )
}