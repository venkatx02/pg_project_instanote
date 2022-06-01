import React from "react";

const Nav = () => {
    return (
        <nav className='nav'>
            <a href="/" className="site">InstaNote</a>
            <ul>
                <li><a href="/login" className="login">Login</a></li>
                <li><a href="/register" className="register">Register</a></li>
            </ul>
        </nav>
    )
}

export default Nav