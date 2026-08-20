import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar-header">
      <nav className="navbar">
        <a href="#" className="logo">
          SB<span className="logo-dot">.</span>
        </a>

        <div className="nav-links">
          <a href="#accueil">Accueil</a>
          <a href="#a-propos">À propos</a>
          <a href="#competences">Compétences</a>
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#cv" className="btn-cv">Télécharger CV</a>
      </nav>
    </header>
  );
}

export default Navbar;