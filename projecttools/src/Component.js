import React from 'react'
import Message from "./Message"

let names = ['Trần', "Diễm", "Hương"]

function reverse() {
    console.log("reverse names: ", names.reverse())
    // return names.reverse()
}

function promote(name) {
    names = [name, ...names.filter(item => item!== name)]
    console.log("promote name: ", names)
}

export default function Comp() {
    return (
        <div>
            <h1 className="bg-primary text-white text-center p-2">
                This is function component!
            </h1>
            <Message name={names} callback={reverse} promote={promote}/>
            <Message name={['Hương', "Trần", "Hương"]} callback={reverse} promote={promote} />
        </div>
    )
}