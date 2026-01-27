import { useEffect, useRef } from 'react';

const About = () => {
    const aboutRef = useRef(null);

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

        const elements = aboutRef.current?.querySelectorAll('.reveal');
        elements?.forEach((el) => observer.observe(el));

        return () => {
            elements?.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <section id="about" className="section" ref={aboutRef}>
            <div className="container">
                <div className="section-title reveal">
                    <h2>About</h2>
                    <p>The artist behind the lens</p>
                </div>
                <div className="about-content">
                    <div className="about-text reveal">
                        <h3>Crafting Stories Through Shadow & Light</h3>
                        <p>
                            With over a decade of experience in fine art photography, I specialize in
                            creating cinematic imagery that explores the delicate balance between
                            darkness and illumination. My work is characterized by deep blacks,
                            subtle gradients, and a minimalist aesthetic that emphasizes emotion
                            over exposition.
                        </p>
                        <p>
                            Each photograph is a carefully composed narrative, inviting viewers to
                            discover hidden details and interpret their own stories within the
                            shadows. I believe that what remains unseen is often as powerful as
                            what is revealed.
                        </p>
                        <p>
                            My approach combines classical low-key lighting techniques with modern
                            digital artistry, resulting in timeless images that evoke mystery,
                            contemplation, and visual poetry.
                        </p>
                    </div>
                    <div className="reveal">
                        <img
                            src="/images/photographer.png"
                            alt="About the photographer"
                            className="about-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
