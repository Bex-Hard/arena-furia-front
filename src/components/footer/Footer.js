import React from 'react';
import './footer.css'
import icon_furia from '../../assets/images/icon_furia.png';
import instagram from '../../assets/images/external-icons/instagram.svg';

function Footer() {
    return (
        <footer className="app-footer">
            <div className="site-oficial">
                <a
                    href="https://www.furia.gg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-oficial"
                >
                    visite nosso <i>site oficial</i>
                </a>
            </div>
            <div className="footer-brand">
                <div className="footer-logo">
                    <img src={icon_furia} alt="Ícone FURIA" />
                </div>
                <div className="footer-title">
                    <span className="arena">arena</span>
                    <span className="furia">furia</span>
                </div>
            </div>

            <div className="footer-links">
                <a
                    href="https://www.instagram.com/furiagg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-link"
                >
                    siga FURIA
                    <img src={instagram} alt="Instagram FURIA" />
                </a>
            </div>
        </footer>
    )
}
export default Footer;