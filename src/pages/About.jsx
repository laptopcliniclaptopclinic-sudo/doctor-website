import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about-page">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
          alt="Medical team"
        />
      </div>

      <div className="about-content">
        <p className="small-title">ABOUT MEDICARE</p>

        <h1>We Care About Your Health</h1>

        <p>
          MediCare is a modern healthcare platform designed to
          connect patients with trusted and experienced doctors.
        </p>

        <p>
          Our goal is to make healthcare simple, accessible and
          convenient for everyone. Patients can explore doctors,
          learn about services and request appointments online.
        </p>

        <div className="about-points">
          <p>✓ Experienced Doctors</p>
          <p>✓ Quality Healthcare</p>
          <p>✓ Easy Appointment Booking</p>
          <p>✓ Patient-Focused Care</p>
        </div>

        <Link to="/appointment" className="hero-button">
          Book Appointment
        </Link>
      </div>
    </section>
  );
}

export default About;