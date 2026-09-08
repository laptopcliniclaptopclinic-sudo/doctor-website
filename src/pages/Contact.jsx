import { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact-page">
      <div className="page-heading">
        <h1>Contact Our Doctors</h1>
        <p>
          Have a question? Send us a message and our team will
          get back to you.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>

          <p>📞 +92 300 1234567</p>
          <p>✉️ medicare@example.com</p>
          <p>📍 Lahore, Pakistan</p>
          <p>🕐 Mon - Sat: 9:00 AM - 6:00 PM</p>

          <div className="contact-image">
            <img
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=700&q=80"
              alt="Doctor consultation"
            />
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
          />

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            placeholder="Your Message..."
            rows="7"
            required
          ></textarea>

          <button type="submit">Send Message</button>

          {sent && (
            <p className="success-message">
              ✓ Your message has been sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;