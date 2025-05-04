import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // Ao montar, tenta recarregar do localStorage
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            setUser({
                email: decoded.sub,
                username: decoded.username
            });
        }
    }, []);

    async function login(email, password) {
        const res = await api.post('/auth/login', { email, password });
        const token = res.data.Token;
        localStorage.setItem('token', token);

        const decoded = jwtDecode(token);
        setUser({
            email: decoded.sub,
            username: decoded.username
        });

        navigate('/chatroom', { replace: true });
    }

    async function register(username, email, password) {
        await api.post('/user/register', { username, email, password });
        // opcional: fazer login automático
        await login(email, password);
    }

    function logout() {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login', { replace: true });
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
