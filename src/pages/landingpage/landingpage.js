import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Header from '../../components/header/Header';
import Menu from '../../components/menu/menu';
import Footer from '../../components/footer/Footer';
import './landingpage.css';
import {ArrowRight, ArrowLeft, HeartHandshake, HandHeart, MessagesSquare} from 'lucide-react';
import telegram from "../../assets/images/external-icons/telegram.svg";

const LandingPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        require('../../assets/images/1-img_carrossel.jpg'),
        require('../../assets/images/2-img_carrossel.jpg')
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className="landing-page">
            <Header />
            <Menu />

            {/* Carrossel */}
            <div className="carousel-container">
                <button className="carousel-arrow left" onClick={prevSlide}>
                    <ArrowLeft size={40} />
                </button>

                <img
                    src={images[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    className="carousel-image"
                />

                <button className="carousel-arrow right" onClick={nextSlide}>
                    <ArrowRight size={40} />
                </button>
            </div>

            {/* Texto Principal */}
            <div className="hero-section">
                <h1 className="main-heading">
                    <span className="converse">CONVERSE</span>
                    <span className="subheading">
                        com seus amigos
                        <span className="vibra">enquanto vibra pela FURIA</span>
                    </span>
                </h1>

                <Link to="/chatroom" className="cta-button">
                    ENTRAR NA ARENA
                </Link>

                {/* Seção de Features */}
                <h2 className="mid-text">
                    Tudo o que você precisa para torcer junto, em um só lugar
                </h2>
                <div className="features-container">
                    <div className="feature-card">
                        <div className="feature-text">
                            Converse em tempo real com outros fãs da FURIA pelo nosso live chat
                        </div>
                        <HeartHandshake className="feature-icon" />
                    </div>

                    <div className="feature-card">
                        <div className="feature-text">
                            Compartilhe momentos,
                            comemore vitórias e
                            faça parte da torcida
                        </div>
                        <HandHeart className="feature-icon" />
                    </div>

                    <div className="feature-card">
                        <div className="feature-text">
                            Tire dúvidas e conheça curiosidades com nosso Chatbot oficial
                        </div>
                        <MessagesSquare className="feature-icon" />
                    </div>
                </div>
                {/* Seção do Telegram */}
                <div className="telegram-cta">
                    <a
                        href="https://t.me/hard_furioso_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="telegram-link"
                    >
                        <span>Converse com o nosso bot também no Telegram</span>
                        <img src={telegram} alt="Telegram FURIA" />
                    </a>
                </div>
                {/* Chamada Final */}
                <h2 className="final-cta">
                    JUNTE-SE À TORCIDA FURIOSA
                </h2>
            </div>



            <Footer />
        </div>
    );
};

export default LandingPage;