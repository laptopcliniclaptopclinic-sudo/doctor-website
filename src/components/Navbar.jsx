import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🩺 MediCare
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/appointment">Appointment</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Link to="/appointment" className="nav-button">
        Book Appointment
      </Link>
    </nav>
  );
}

export default Navbar;