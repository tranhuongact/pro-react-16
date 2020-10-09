import React from "react"
import CallbackButton from './CallbackButton'
import { Summary } from './Summary'

function renderElements(names) {
    return names.map(name => <h3 className="text-center">Hello {name}.</h3>)
}

export default function Message(props) {
    return (
        <div>
            {/* Cách 1.
            {renderElements(props.name)} */}
            {/* Cách 2 */}
            {props.name.map((name, index) => {
                // if (index === 0) return null;
                // else 
                return (
                    <div className="row" key={`${name}-${index}`}>
                        <h3 className="text-right col-6">{index}. Hello {name}.</h3>
                        <div className="col-6">
                            {/* <button className="btn btn-info btn-sm mr-2" onClick={props.callback}>Reverse name</button>
                            <button className="btn btn-info btn-sm" onClick={() => props.promote(name)}>Promote name</button> */}
                            <CallbackButton theme="primary" text="Reverse name" callback={props.callback} />
                            <CallbackButton theme="info" text="Promote name" callback={() => props.promote(name)} />
                        </div>
                        <tr className="pl-5">
                            <Summary index={index} name={name} callback={() => props.promote(name)} />
                        </tr>
                    </div>
                )
            })
            }
        </div>
    )
}
