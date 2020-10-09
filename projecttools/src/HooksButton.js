import React, { useState } from 'react'

export function HooksButton(props) {
    const [counter, setCounter] = useState(0)
    const [hasButtonClicked, setHasButtonClicked] = useState(false)

    const handleClick = () => {
        setCounter(counter + 2)
        setHasButtonClicked(!hasButtonClicked)
        props.callbackSum()
    }

    return (
        <button onClick={handleClick} className="btn btn-info ml-2">
            {props.text} {counter}
            {hasButtonClicked && <div>Button Clicked</div>}
        </button>
    )
}