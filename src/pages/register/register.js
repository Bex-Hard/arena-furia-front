import React from 'react';
import './register.css';
import wallpaper_furia from '../../assets/images/wallpaper_cortado.jpg';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="register-page">
            {/* Título no topo */}
            <header className="register-header">
                <span className="arena">arena</span>
                <span className="furia">F U R I A</span>
            </header>

            {/* Conteúdo principal: imagem + caixa de login */}
            <div className="register-content">
                {/* Lado esquerdo: wallpaper */}
                <div
                    className="register-image"
                    style={{ backgroundImage: `url(${wallpaper_furia})` }}
                />

                {/* Lado direito: caixa de login */}
                <div className="register-box">
                    <h2 className="register-box-title">register</h2>
                    <form className="register-form">
                        <input
                            type="username"
                            placeholder="username"
                            className="register-input"
                        />
                        <input
                            type="email"
                            placeholder="e-mail"
                            className="register-input"
                        />
                        <input
                            type="password"
                            placeholder="senha"
                            className="register-input"
                        />
                        <button type="submit" className="register-button">
                            Registrar
                        </button>
                    </form>

                    {/* Link de registro simplificado */}
                    <div className="login-link">
                        <span>ou </span>
                        <a
                            href="/login"
                            className="register-anchor"
                            onClick={(e) => {
                                e.preventDefault();
                                alert('Funcionalidade de login desativada temporariamente');
                            }}
                        >
                            login
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;