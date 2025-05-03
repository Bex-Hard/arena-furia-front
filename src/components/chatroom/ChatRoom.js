import React, { useEffect, useState } from 'react';
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import styles from './chatroom.css';
import {Send} from 'lucide-react';


let stompClient = null;

const ChatRoom = () => {
    const [publicChats, setPublicChats] = useState([]);
    const [tab, setTab] = useState('CHATROOM');
    const [userData, setUserData] = useState({
        username: '',
        receivername: '',
        connected: false,
        message: '',
    });

    useEffect(() => {
        console.log(userData);
    }, [userData]);

    const connect = () => {
        const Sock = new SockJS('http://localhost:8080/ws');
        stompClient = over(Sock);
        stompClient.connect({}, onConnected, onError);
    };

    const onConnected = () => {
        setUserData((prev) => ({ ...prev, connected: true }));
        stompClient.subscribe('/chatroom/public', onMessageReceived);
        userJoin();
    };

    const userJoin = () => {
        const chatMessage = {
            senderName: userData.username,
            status: 'JOIN',
        };
        stompClient.send('/app/message', {}, JSON.stringify(chatMessage));
    };

    const onMessageReceived = (payload) => {
        const payloadData = JSON.parse(payload.body);
        if (payloadData.status === 'MESSAGE') {
            setPublicChats((prev) => [...prev, payloadData]);
        }
    };

    const onError = (err) => {
        console.error(err);
    };

    const handleMessage = (e) => {
        setUserData((prev) => ({ ...prev, message: e.target.value }));
    };

    const sendValue = () => {
        if (stompClient) {
            const chatMessage = {
                senderName: userData.username,
                message: userData.message,
                status: 'MESSAGE',
            };
            stompClient.send('/app/message', {}, JSON.stringify(chatMessage));
            setUserData((prev) => ({ ...prev, message: '' }));
        }
    };

    const handleUsername = (e) => {
        setUserData((prev) => ({ ...prev, username: e.target.value }));
    };

    const registerUser = () => {
        connect();
    };

    return (
        <div className="container">
            {userData.connected ? (
                <>
                    <div className="chat-box">
                        {/* Header interno */}
                        <div className="chat-header">
                            CS - FURIA vs paiN | 30/06/2025 | 20h
                        </div>
                        {tab === 'CHATROOM' ? (
                            <div className="chat-content">
                                <ul className="chat-messages">
                                    {publicChats.map((chat, idx) => (
                                        <li
                                            key={idx}
                                            className={`message ${
                                                chat.senderName === userData.username ? 'self' : ''
                                            }`}
                                        >
                                            {chat.senderName !== userData.username && (
                                                <div className="avatar">{chat.senderName}</div>
                                            )}
                                            <div className="message-data">{chat.message}</div>
                                            {chat.senderName === userData.username && (
                                                <div className="avatar self">{chat.senderName}</div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                                <div className="send-message">
                                    <input
                                        type="text"
                                        className="input-message transparent-input"
                                        placeholder="enter the message"
                                        value={userData.message}
                                        onChange={handleMessage}
                                    />
                                    <button
                                        type="button"
                                        className="send-button icon-button"
                                        onClick={sendValue}
                                    >
                                        <Send size={20} />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="chat-content">
                                <ul className="chat-messages" />
                                <div className="send-message">
                                    <input
                                        type="text"
                                        className="input-message"
                                        placeholder="enter the message"
                                        value={userData.message}
                                        onChange={handleMessage}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </>
            ) : (
                <div className="register">
                    <input
                        id="user-name"
                        placeholder="Enter your name"
                        name="userName"
                        value={userData.username}
                        onChange={handleUsername}
                    />
                    <button type="button" onClick={registerUser}>
                        connect
                    </button>
                </div>
            )}
        </div>
    );
};

export default ChatRoom;
