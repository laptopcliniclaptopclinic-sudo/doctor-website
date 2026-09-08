import DoctorCard from "../components/DoctorCard";

function Doctors() {
  const doctors = [
    {
      name: "Dr. Sarah Ahmed",
      specialization: "Cardiologist",
      experience: "10 Years",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Dr. Ali Hassan",
      specialization: "Neurologist",
      experience: "8 Years",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Dr. Ayesha Khan",
      specialization: "Dermatologist",
      experience: "7 Years",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Dr. Hamza Malik",
      specialization: "Pediatrician",
      experience: "9 Years",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Dr. Maria Joseph",
      specialization: "Dentist",
      experience: "6 Years",
      image:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Dr. Usman Raza",
      specialization: "General Physician",
      experience: "12 Years",
      image:
        "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <section className="doctors-page">
      <div className="page-heading">
        <h1>Our Expert Doctors</h1>
        <p>Meet our experienced and trusted healthcare professionals.</p>
      </div>

      <div className="doctors-grid">
        {doctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            image={doctor.image}
            name={doctor.name}
            specialization={doctor.specialization}
            experience={doctor.experience}
          />
        ))}
      </div>
    </section>
  );
}

export default Doctors;