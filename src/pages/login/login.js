import React from 'react';
import './login.css';
import wallpaper_furia from '../../assets/images/wallpaper_cortado.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-page">
            {/* Título no topo */}
            <header className="login-header">
                <span className="arena">arena</span>
                <span className="furia">F U R I A</span>
            </header>

            {/* Conteúdo principal: imagem + caixa de login */}
            <div className="login-content">
                {/* Lado esquerdo: wallpaper */}
                <div
                    className="login-image"
                    style={{ backgroundImage: `url(${wallpaper_furia})` }}
                />

                {/* Lado direito: caixa de login */}
                <div className="login-box">
                    <h2 className="login-box-title">login</h2>
                    <form className="login-form">
                        <input
                            type="email"
                            placeholder="e-mail"
                            className="login-input"
                        />
                        <input
                            type="password"
                            placeholder="senha"
                            className="login-input"
                        />
                        <button type="submit" className="login-button">
                            Entrar
                        </button>
                    </form>

                    {/* Link de registro simplificado */}
                    <div className="register-link">
                        <span>ou </span>
                        <a
                            href="/registro"
                            className="register-anchor"
                            onClick={(e) => {
                                e.preventDefault();
                                alert('Funcionalidade de registro desativada temporariamente');
                            }}
                        >
                            registre-se
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;