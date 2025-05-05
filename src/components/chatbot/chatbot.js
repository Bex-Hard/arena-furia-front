import React, { useState, useEffect } from 'react';
import './chatbot.css';
import { Send, X } from 'lucide-react';

// Dados do chatbot
const JOGOS = [
    "FURIA vs MIBR - 20/03/2024 - 19:00",
    "FURIA vs LOUD - 22/03/2024 - 20:00",
    "FURIA vs Imperial - 25/03/2024 - 18:00"
];

const ESTATISTICAS = {
    "K/D": "1.25",
    "Mapas Favoritos": "Mirage, Inferno, Ancient",
    "Win Rate": "65%",
    "Headshot %": "45%"
};

const CURIOSIDADES = [
    "A FURIA foi fundada em 2017",
    "O time tem uma das maiores torcidas do Brasil",
    "O mascote da FURIA é um lobo",
    "A FURIA já venceu vários campeonatos internacionais"
];

const CAMPEONATOS = [
    "ESL Pro League - Em andamento",
    "BLAST Premier - Próxima etapa em abril",
    "IEM Rio - Qualificatórias em maio"
];

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    useEffect(() => {
        // Mensagem inicial quando o chat é aberto
        if (isOpen && messages.length === 0) {
            setMessages([{
                sender: 'bot',
                message: 'Olá! Eu sou o bot da FURIA! 🐺\nUse /ajuda para ver os comandos disponíveis.'
            }]);
        }
    }, [isOpen]);

    const processCommand = (command) => {
        switch(command.toLowerCase()) {
            case '/jogos':
                return `📅 Próximos jogos da FURIA:\n\n${JOGOS.map(jogo => `• ${jogo}`).join('\n')}`;

            case '/telegram':
                return `Use o Bot FURIOSO no Telegram! https://t.me/hard_furioso_bot`;
            case '/estatisticas':
                return `📊 Estatísticas da FURIA:\n\n${Object.entries(ESTATISTICAS).map(([key, value]) => `${key}: ${value}`).join('\n')}`;
                
            case '/curiosidades':
                return `🤔 Curiosidades sobre a FURIA:\n\n${CURIOSIDADES.map(curiosidade => `• ${curiosidade}`).join('\n')}`;
                
            case '/campeonatos':
                return `🏆 Campeonatos da FURIA:\n\n${CAMPEONATOS.map(campeonato => `• ${campeonato}`).join('\n')}`;
                
            case '/ajuda':
                return `Olá! Eu sou o bot da FURIA! 🐺\nUse os seguintes comandos:\n/telegram - Use nosso bot no telegram\n/jogos - Ver agenda de partidas\n/estatisticas - Ver estatísticas do time\n/curiosidades - Saber fatos divertidos\n/campeonatos - Ver campeonatos atuais`;
                
            default:
                return 'Comando não reconhecido. Use /ajuda para ver os comandos disponíveis.';
        }
    };

    const handleSendMessage = () => {
        if (!inputMessage.trim()) return;

        // Adiciona mensagem do usuário
        setMessages(prev => [...prev, {
            sender: 'user',
            message: inputMessage
        }]);

        // Processa comando se começar com /
        if (inputMessage.startsWith('/')) {
            const botResponse = processCommand(inputMessage);
            setMessages(prev => [...prev, {
                sender: 'bot',
                message: botResponse
            }]);
        }

        setInputMessage('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="chatbot-container">
            {!isOpen ? (
                <button 
                    className="chatbot-button"
                    onClick={() => setIsOpen(true)}
                >
                    Fale com o Bot da FURIA 🐺
                </button>
            ) : (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <h3>FURIA Bot 🐺</h3>
                        <button 
                            className="close-button"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={20} />
                        </button>
                    </div>
                    
                    <div className="chatbot-messages">
                        {messages.map((msg, idx) => (
                            <div 
                                key={idx} 
                                className={`message ${msg.sender === 'user' ? 'user' : 'bot'}`}
                            >
                                <div className="message-content">
                                    {msg.message}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="chatbot-input">
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Digite um comando (use /ajuda)"
                        />
                        <button onClick={handleSendMessage}>
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatBot;