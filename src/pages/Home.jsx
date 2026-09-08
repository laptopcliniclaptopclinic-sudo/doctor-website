import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Your Health, Our Priority</h1>

          <p>
            Connect with experienced doctors and get the healthcare
            you deserve.
          </p>

          <Link to="/appointment" className="hero-button">
            Book an Appointment
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80"
            alt="Doctor"
          />
        </div>
      </section>

      <section className="welcome">
        <h2>Welcome to MediCare</h2>

        <p>
          We make it easy for patients to find doctors, learn about
          medical services, and request appointments online.
        </p>

        <div className="home-cards">
          <div className="info-card">
            <span>👨‍⚕️</span>
            <h3>Expert Doctors</h3>
            <p>Experienced and professional healthcare specialists.</p>
          </div>

          <div className="info-card">
            <span>📅</span>
            <h3>Easy Appointment</h3>
            <p>Request an appointment with your preferred doctor.</p>
          </div>

          <div className="info-card">
            <span>❤️</span>
            <h3>Patient Care</h3>
            <p>Your health and comfort are our top priorities.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;