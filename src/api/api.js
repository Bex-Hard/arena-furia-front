import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',
});

// Insere automaticamente o token no header somente nas rotas protegidas
api.interceptors.request.use(config => {
    // Se a URL for de login ou registro, não coloca Authorization
    const isAuthRoute =
        config.url?.endsWith('/auth/login') ||
        config.url?.endsWith('/auth/register') ||
        config.url?.endsWith('/user/register');

    if (!isAuthRoute) {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }

    return config;
});

export default api;
