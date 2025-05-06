import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, HeartHandshake, HandHeart, MessagesSquare } from 'lucide-react';

// Componentes
import Header from '../../components/header/Header';
import Menu from '../../components/menu/menu';
import Footer from '../../components/footer/Footer';

// Assets
import './landingpage.css';
import telegramIcon from "../../assets/images/external-icons/telegram.svg";
import carouselImage1 from '../../assets/images/1-img_carrossel.jpg';
import carouselImage2 from '../../assets/images/2-img_carrossel.jpg';

const FEATURES = [
    {
        text: "Converse em tempo real com outros fãs da FURIA pelo nosso live chat",
        icon: HeartHandshake
    },
    {
        text: "Compartilhe momentos, comemore vitórias e faça parte da torcida",
        icon: HandHeart
    },
    {
        text: "Tire dúvidas e conheça curiosidades com nosso Chatbot oficial",
        icon: MessagesSquare
    }
];

const LandingPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [carouselImage1, carouselImage2];

    const handleSlide = useCallback((direction) => {
        setCurrentSlide(prev => {
            const lastIndex = images.length - 1;
            return direction === 'next'
                ? prev === lastIndex ? 0 : prev + 1
                : prev === 0 ? lastIndex : prev - 1;
        });
    }, [images.length]);

    const renderCarouselControls = () => (
        <>
            <button
                className="carousel-arrow left"
                onClick={() => handleSlide('prev')}
                aria-label="Slide anterior"
            >
                <ArrowLeft size={40} />
            </button>

            <button
                className="carousel-arrow right"
                onClick={() => handleSlide('next')}
                aria-label="Próximo slide"
            >
                <ArrowRight size={40} />
            </button>
        </>
    );

    const renderFeatureCards = () => (
        <div className="features-container">
            {FEATURES.map(({ text, icon: Icon }, index) => (
                <div key={index} className="feature-card">
                    <div className="feature-text">{text}</div>
                    <Icon className="feature-icon" />
                </div>
            ))}
        </div>
    );

    return (
        <div className="landing-page">
            <Header />
            <Menu />

            {/* Seção do Carrossel */}
            <div className="carousel-container">
                {renderCarouselControls()}
                <img
                    src={images[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    className="carousel-image"
                    loading="lazy"
                />
            </div>

            {/* Conteúdo Principal */}
            <main>
                <section className="hero-section">
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
                </section>

                {/* Seção de Recursos */}
                <section aria-labelledby="features-heading">
                    <h2 id="features-heading" className="mid-text">
                        Tudo o que você precisa para torcer junto, em um só lugar
                    </h2>
                    {renderFeatureCards()}
                </section>

                {/* Chamada para Ação do Telegram */}
                <div className="telegram-cta">
                    <a
                        href="https://t.me/hard_furioso_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="telegram-link"
                    >
                        <span>Converse com o nosso bot também no Telegram</span>
                        <img src={telegramIcon} alt="Ícone do Telegram" className="telegram-icon" />
                    </a>
                </div>

                {/* Chamada Final */}
                <h2 className="final-cta">JUNTE-SE À TORCIDA FURIOSA</h2>
            </main>

            <Footer />
        </div>
    );
};

export default LandingPage;