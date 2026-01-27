import { useEffect, useRef } from 'react';

const Contact = () => {
    const contactRef = useRef(null);

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

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
        };
    }, []);

    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="section-title reveal">
                    <h2>Get in Touch</h2>
                    <p>Let's create something extraordinary together</p>
                </div>
                <div className="contact-info reveal" ref={contactRef}>
                    <p>
                        Available for commissioned work, collaborations, and fine art prints.
                        Whether you're looking for editorial photography, portrait sessions,
                        or custom artwork, I'd love to hear about your vision.
                    </p>
                    <div className="contact-links">
                        <a href="mailto:hello@lens.photography" className="contact-link">
                            Email Me
                        </a>
                        <a href="tel:+1234567890" className="contact-link">
                            Call
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
