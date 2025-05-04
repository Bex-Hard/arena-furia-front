import React from 'react';
import Header from '../../components/header/Header';
import Menu from '../../components/menu/menu';
import ChatRoom from '../../components/chatroom/ChatRoom';
import Footer from '../../components/footer/Footer';
import './chatroompage.css';

const ChatRoomPage = () => {
    return(
        <div className="chatroom-page">
            <Header />
            <Menu />
            <div className="content-container">
                <div className="chatroom-wrapper">
                    <ChatRoom/>
                </div>

                <div className="title-container">
                    <h1 className="main-title">A casa oficial dos fãs da FURIA</h1>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ChatRoomPage;