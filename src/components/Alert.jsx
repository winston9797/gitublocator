import React from 'react'

export default function Alert(props) {
    return (
        <div className={`alert alert-${props.type}`}  >{props.msg}</div>
    )
}
