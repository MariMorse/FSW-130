import React from "react"
import { Link } from "react-router-dom"

function Navbar() {

    return (
        <div className='navbar'>
            <span className='navlink'>
                <Link to="/">Home</Link>
            </span>
            <span className='navlink'>
                <Link to="/skillset"></Link>
            </span>
            <span className='navlink'>
                <Link to="/workhistory"></Link>
            </span>
            <span className='navlink'>
                <Link to="/summary"></Link>
            </span>
        </div>
    )
}

export default Navbar