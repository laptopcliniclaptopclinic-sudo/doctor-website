import { useState } from "react";

function Appointment() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="appointment-page">
      <div className="appointment-container">

        <div className="appointment-text">
          <p className="small-title">BOOK AN APPOINTMENT</p>

          <h1>Schedule Your Doctor Appointment</h1>

          <p>
            Fill out the form and send your appointment request.
            Our team will contact you to confirm the appointment.
          </p>

          <div className="appointment-info">
            <p>📞 +92 300 1234567</p>
            <p>✉️ medicare@example.com</p>
            <p>🕐 Mon - Sat: 9:00 AM - 6:00 PM</p>
          </div>
        </div>

        <form className="appointment-form" onSubmit={handleSubmit}>

          <h2>Patient Information</h2>

          <input
            type="text"
            placeholder="Patient Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
          />

          <select required>
            <option value="">Select Doctor</option>
            <option>Dr. Sarah Ahmed - Cardiologist</option>
            <option>Dr. Ali Hassan - Neurologist</option>
            <option>Dr. Ayesha Khan - Dermatologist</option>
            <option>Dr. Hamza Malik - Pediatrician</option>
            <option>Dr. Maria Joseph - Dentist</option>
            <option>Dr. Usman Raza - General Physician</option>
          </select>

          <input type="date" required />

          <textarea
            placeholder="Write your message..."
            rows="5"
          ></textarea>

          <button type="submit">
            Send Appointment Request
          </button>

          {submitted && (
            <p className="success-message">
              ✓ Appointment request submitted successfully!
            </p>
          )}

        </form>
      </div>
    </section>
  );
}

export default Appointment;