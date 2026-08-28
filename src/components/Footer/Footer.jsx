import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section" id="contact">
      <div className="footer-container">
        {/* Partie Contact */}
        <h2 className="footer-title">Contactez-moi</h2>
        <p className="footer-subtitle">
          Vous avez un projet ou une question ? N'hésitez pas à me contacter.
        </p>

        <div className="footer-contact-info">
          <div className="contact-item">
            <span className="icon">✉️</span>
            <a href="mailto:arimasboukhanoufa@gmail.com">
              arimasboukhanoufa@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <span className="icon">📞</span>
            <a href="tel:+33600000000">+33 6 56 78 98 44</a>
          </div>
          <div className="contact-item">
            <span className="icon">📍</span>
            <span>Paris, France</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} BOUKHANOUFA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
