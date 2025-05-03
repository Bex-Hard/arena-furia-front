import React from 'react';
import './header.css'
import icon_furia from '../../assets/images/icon_furia.png';
import {UserRound} from 'lucide-react';

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
                <UserRound size={32} /> {/* Tamanho ajustável */}
            </div>
        </header>
    )
}
export default Header;