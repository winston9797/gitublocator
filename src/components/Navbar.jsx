import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand bg-primary navbar-dark">
            <Link className="navbar-brand" to='/' >{props.title}</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
            </ul>
        </nav>
)
}
