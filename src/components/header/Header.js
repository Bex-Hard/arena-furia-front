import React from 'react';
import './header.css'
import icon_furia from '../../assets/images/icon_furia.png';
import {UserRound} from 'lucide-react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="app-header">
                <div className="header-logo">
                    <img src={icon_furia} alt="Icon" />
                </div>
                <div className="header-title">
                    <span className="arena">arena </span>
                    <span className="furia"> furia</span>
                </div>
            <div className="header-user">
                <Link to="/login" className="nav-link">Login</Link>
                <span> ou </span>
                <Link to="/register" className="nav-link">Registro</Link>
            </div>
        </header>
    )
}
export default Header;