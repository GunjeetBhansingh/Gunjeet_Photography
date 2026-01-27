const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">
                    © {currentYear} LENS Photography. All rights reserved.
                </p>
                <p className="footer-text" style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                    Crafted with precision and passion
                </p>
            </div>
        </footer>
    );
};

export default Footer;
