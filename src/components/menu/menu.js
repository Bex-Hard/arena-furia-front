import React from 'react';
import './menu.css'
import {Link} from "react-router-dom";

function Menu() {
    return (
        <nav className="app-menu">
            <div className="nav-links">
                <Link to="/" className="nav-link active">Home</Link>
                <span className="separator">|</span>
                <Link to="/chatroom" className="nav-link">LiveChat</Link>
                <span className="separator">|</span>
                <Link to="/chatbot" className="nav-link">ChatBot</Link>
            </div>
        </nav>
    );
}
export default Menu;