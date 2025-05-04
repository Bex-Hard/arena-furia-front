import React from 'react';
import Header from '../../components/header/Header';
import Menu from '../../components/menu/menu';
import Footer from '../../components/footer/Footer';
import './landingpage.css';

const LandingPage = () => {
    return(
        <div className="chatroom-page">
            <Header />
            <Menu />

            <Footer />
        </div>
    )
}
export default LandingPage;