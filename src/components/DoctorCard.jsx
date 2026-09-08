import { Link } from "react-router-dom";

function DoctorCard({ image, name, specialization, experience }) {
  return (
    <div className="doctor-card">
      <img src={image} alt={name} />

      <div className="doctor-info">
        <h3>{name}</h3>
        <p className="specialization">{specialization}</p>
        <p>Experience: {experience}</p>

        <Link to="/appointment" className="appointment-btn">
          Book Appointment
        </Link>
      </div>
    </div>
  );
}

export default DoctorCard;