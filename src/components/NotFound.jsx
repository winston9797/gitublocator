import React, { Component } from 'react'

export default class NotFound extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const style = {
            fontSize:'250px'
        }
        return (
            <div>
                <h1  style={style}>404 </h1>
                <p>{this.props.msg}</p>
            </div>
        )
    }
}
