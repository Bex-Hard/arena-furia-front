import React from 'react';
import './menu.css'

function Menu() {
    return (
        <nav className="app-menu">
            {/* Links Centrais com separadores */}
            <div className="nav-links">
                <a href="/" className="nav-link active">Home</a>
                <span className="separator">|</span>
                <a href="/livechat" className="nav-link">LiveChat</a>
                <span className="separator">|</span>
                <a href="/chatbot" className="nav-link">ChatBot</a>
            </div>
        </nav>
    )
}
export default Menu;