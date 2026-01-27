import { useEffect, useRef } from 'react';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    return (
        <section id="home" className="hero" ref={heroRef}>
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        Capturing
                        <br />
                        Moments in
                        <br />
                        Darkness
                    </h1>
                    <p className="hero-subtitle">Visual Storyteller & Fine Art Photographer</p>
                    <p className="hero-description">
                        Exploring the interplay of light and shadow, creating cinematic narratives
                        through the lens. Every frame tells a story of mystery, emotion, and artistry.
                    </p>
                    <a href="#portfolio" className="cta-button" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
                    }}>
                        View Portfolio
                    </a>
                </div>
                <div className="hero-image-container">
                    <img
                        src="/images/photographer.png"
                        alt="Photographer Portrait"
                        className="hero-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
