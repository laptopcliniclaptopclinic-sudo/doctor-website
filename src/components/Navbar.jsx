import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        🩺 MediCare
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/doctors" onClick={closeMenu}>Doctors</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/appointment" onClick={closeMenu}>Appointment</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>

      <Link
        to="/appointment"
        className="nav-button"
        onClick={closeMenu}
      >
        Book Appointment
      </Link>
    </nav>
  );
}

export default Navbar;