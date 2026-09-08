import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      icon: "❤️",
      title: "Cardiology",
      description:
        "Professional care and consultation for heart-related health concerns.",
    },
    {
      icon: "🧠",
      title: "Neurology",
      description:
        "Specialized consultation for brain and nervous system conditions.",
    },
    {
      icon: "🩺",
      title: "General Checkup",
      description:
        "Regular health checkups and medical consultations.",
    },
    {
      icon: "👶",
      title: "Pediatrics",
      description:
        "Healthcare services focused on children's health and wellbeing.",
    },
    {
      icon: "✨",
      title: "Dermatology",
      description:
        "Professional consultation for skin, hair and related concerns.",
    },
    {
      icon: "🦷",
      title: "Dental Care",
      description:
        "Complete dental consultation and oral healthcare services.",
    },
  ];

  return (
    <section className="services-page">
      <div className="page-heading">
        <h1>Our Medical Services</h1>

        <p>
          Quality healthcare services provided by experienced
          professionals.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>

            <h2>{service.title}</h2>

            <p>{service.description}</p>

            <Link to="/appointment">Book Now →</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;