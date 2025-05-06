import React from 'react';
import './footer.css';
import iconFuria from '../../assets/images/icon_furia.png';
import instagramIcon from '../../assets/images/external-icons/instagram.svg';
import telegramIcon from '../../assets/images/external-icons/telegram.svg';

const SOCIAL_LINKS = [
    {
        href: 'https://www.instagram.com/furiagg/',
        label: 'siga FURIA',
        icon: instagramIcon,
        alt: 'Instagram FURIA'
    },
    {
        href: 'https://t.me/hard_furioso_bot',
        label: 'converse com o nosso bot',
        icon: telegramIcon,
        alt: 'Telegram FURIA'
    }
];

export default function Footer() {
    return (
        <footer className="app-footer">
            <div className="footer-left">
                <a
                    href="https://www.furia.gg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-oficial"
                >
                    visite nosso <i>site oficial</i>
                </a>
            </div>

            <div className="footer-center">
                <div className="footer-brand">
                    <img className="footer-logo" src={iconFuria} alt="Ícone FURIA" />
                    <div className="footer-title">
                        <span className="arena">arena</span>
                        <span className="furia">furia</span>
                    </div>
                </div>
            </div>

            <div className="footer-right">
                <div className="footer-links">
                    {SOCIAL_LINKS.map(({ href, label, icon, alt }) => (
                        <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            {label}
                            <img src={icon} alt={alt} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
