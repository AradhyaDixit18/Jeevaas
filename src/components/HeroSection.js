import React from 'react';
import './HeroSection.css';

const facilities = [
  {
    title: '24/7 Emergency Services',
    description: 'We offer round-the-clock emergency care.',
    icon: 'https://img.icons8.com/fluency/48/000000/hospital-room.png',
  },
  {
    title: 'In-house Pharmacy',
    description: 'Our pharmacy provides a wide range of medicines.',
    icon: 'https://img.icons8.com/fluency/48/000000/pharmacy.png',
  },
  {
    title: 'Specialized Doctors',
    description: 'Consult with specialists across multiple fields.',
    icon: 'https://img.icons8.com/fluency/48/000000/surgeon-male.png',
  },
  {
    title: 'Advanced Diagnostics',
    description: 'State-of-the-art diagnostic facilities.',
    icon: 'https://img.icons8.com/fluency/48/000000/test-tube.png',
  },
];

const HeroSection = ({ openModal }) => {
  return (
    <section className="hero-section">
      <h1 className="hero-title">Welcome to Jeevaas Hospital</h1>
      <div className="cards-container">
        {facilities.map((facility, index) => (
          <div key={index} className="card">
            <img src={facility.icon} alt={facility.title} className="card-icon" />
            <h2 className="card-title">{facility.title}</h2>
            <p className="card-description">{facility.description}</p>
          </div>
        ))}
      </div>
      <button className="book-slot-btn" onClick={openModal}>Book Your Slot</button>
    </section>
  );
};

export default HeroSection;
