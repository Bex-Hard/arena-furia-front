import React from 'react';
import Header from '../components/header/Header';
import Menu from '../components/menu/menu';
import ChatRoom from '../components/chatroom/ChatRoom';
import Footer from '../components/footer/Footer';

const ChatRoomPage = () => {
    return(
        <div className="chatroom-page">
            <Header />
            <Menu />
            <ChatRoom/>
            <Footer />
        </div>
    )
}
export default ChatRoomPage;