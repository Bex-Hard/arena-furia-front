import React, { useState, useContext } from 'react';
import './register.css';
import wallpaper_furia from '../../assets/images/wallpaper_cortado.jpg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Register = () => {
    const { register } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [email, setEmail]       = useState('');
    const [password, setPassword] = useState('');
    const [error, setError]       = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();
        setError(null);

        try {
            await register(username, email, password);
        } catch (err) {
            setError('Falha ao registrar. Verifique os dados e tente novamente.');
        }
    };

    return (
        <div className="register-page">
            <header className="register-header">
                <span className="arena">arena</span>
                <span className="furia">F U R I A</span>
            </header>

            <div className="register-content">
                <div
                    className="register-image"
                    style={{ backgroundImage: `url(${wallpaper_furia})` }}
                />

                <div className="register-box">
                    <h2 className="register-box-title">register</h2>
                    <form className="register-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="username"
                            className="register-input"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="e-mail"
                            className="register-input"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="senha"
                            className="register-input"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />

                        {error && <div className="register-error">{error}</div>}

                        <button type="submit" className="register-button">
                            Registrar
                        </button>
                    </form>

                    <div className="login-link">
                        <span>ou </span>
                        <Link to="/login" className="register-anchor">
                            login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
