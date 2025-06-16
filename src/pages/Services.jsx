import { FaBookReader, FaUserGraduate, FaCertificate, FaChartLine } from 'react-icons/fa';
import './../styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaBookReader size={40} />,
      title: "Interactive Learning",
      description: "Engage with our interactive quizzes designed to make learning fun and effective."
    },
    {
      icon: <FaUserGraduate size={40} />,
      title: "Custom Quiz Creation",
      description: "Create your own quizzes tailored to your specific learning needs."
    },
    {
      icon: <FaCertificate size={40} />,
      title: "Certification",
      description: "Earn certificates upon completing quiz series and demonstrate your knowledge."
    },
    {
      icon: <FaChartLine size={40} />,
      title: "Progress Tracking",
      description: "Monitor your learning progress with detailed analytics and performance metrics."
    }
  ];

  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <div className="service-description">
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
