import { useEffect, useRef } from 'react';

const portfolioItems = [
    {
        id: 1,
        image: '/images/portfolio1.png',
        title: 'Urban Shadows',
        category: 'Architecture',
    },
    {
        id: 2,
        image: '/images/portfolio2.png',
        title: 'Silent Silhouette',
        category: 'Portrait',
    },
    {
        id: 3,
        image: '/images/portfolio3.png',
        title: 'Misty Mountains',
        category: 'Landscape',
    },
];

const Portfolio = () => {
    const portfolioRef = useRef(null);

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

        const items = portfolioRef.current?.querySelectorAll('.portfolio-item');
        items?.forEach((item) => observer.observe(item));

        return () => {
            items?.forEach((item) => observer.unobserve(item));
        };
    }, []);

    return (
        <section id="portfolio" className="section">
            <div className="container">
                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>A curated selection of my recent work</p>
                </div>
                <div className="portfolio-grid" ref={portfolioRef}>
                    {portfolioItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="portfolio-item reveal"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="portfolio-image"
                            />
                            <div className="portfolio-overlay">
                                <h3 className="portfolio-title">{item.title}</h3>
                                <p className="portfolio-category">{item.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
