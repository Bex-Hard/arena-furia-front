import React, {useContext, useState} from 'react';
import './login.css';
import wallpaper_furia from '../../assets/images/wallpaper_cortado.jpg';
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext} from '../../contexts/AuthContext';
import api from "../../api/api";

const Login = () => {
    const {login} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async e => {
        e.preventDefault();
        setError(null);
        try {
            await login(email, password);
        } catch {
            setError('E-mail ou senha inválidos. Tente novamente.');
        }
    };

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
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="e-mail"
                            className="login-input"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="senha"
                            className="login-input"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                        {error && <div className="login-error">{error}</div>}
                        <button type="submit" className="login-button">
                            Entrar
                        </button>
                    </form>

                    {/* Link de registro */}
                    <div className="register-link">
                        <span>ou </span>
                        <Link to="/register" className="register-anchor">
                            registre-se
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;