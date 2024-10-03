import { FaHeartbeat, FaStethoscope, FaAmbulance } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center p-8">
      <motion.div className="service-item" whileHover={{ scale: 1.1 }}>
        <FaHeartbeat size={50} />
        <h2 className="text-xl font-bold mt-2">Cardiology</h2>
        <p>Expert heart care services.</p>
      </motion.div>
      <motion.div className="service-item" whileHover={{ scale: 1.1 }}>
        <FaStethoscope size={50} />
        <h2 className="text-xl font-bold mt-2">General Medicine</h2>
        <p>Comprehensive health check-ups.</p>
      </motion.div>
      <motion.div className="service-item" whileHover={{ scale: 1.1 }}>
        <FaAmbulance size={50} />
        <h2 className="text-xl font-bold mt-2">Emergency Services</h2>
        <p>24/7 emergency support.</p>
      </motion.div>
    </div>
  );
};

export default Services;
