import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Box, Button, Input, Modal, ModalBody, ModalContent, ModalOverlay, Text, Heading, VStack } from '@chakra-ui/react';
import { FaHospital, FaPhone, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';

export default function HospitalPage() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3clznej', 'template_uy9hwga', e.target, 'BHX1Ca4sSWoOpfmMq')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 800 },
  });

  return (
    <Box>
      {/* Dynamic Background */}
      <Box bgGradient="linear(to-r, blue.200, teal.500, purple.600)" minH="100vh" position="relative" overflow="hidden">
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          backgroundImage="url('/dynamic-pattern.png')"
          opacity={0.3}
          backgroundSize="cover"
        />

        {/* Animated Welcome Section */}
        <VStack spacing={8} p={10} textAlign="center" color="white" h="100vh" justifyContent="center">
          <animated.div style={fadeIn}>
            <Heading fontSize={{ base: '3xl', md: '5xl' }} fontWeight="extrabold" textTransform="uppercase">
              Welcome to Jeevaas Hospital Private Limited
            </Heading>
          </animated.div>
        </VStack>
      </Box>

      {/* Facilities Section */}
      <Box display="flex" flexWrap="wrap" justifyContent="center" p={10} bg="gray.100">
        <GlasmorphismCard icon={<FaHospital />} title="24/7 Emergency Services" description="We provide round-the-clock emergency services with experienced staff." />
        <GlasmorphismCard icon={<FaHospital />} title="Best Medical Professionals" description="Our doctors are experts in various medical fields." />
        <GlasmorphismCard icon={<FaHospital />} title="Advanced Lab" description="State-of-the-art laboratory facilities for accurate diagnosis." />
      </Box>

      {/* Book Checkup Button */}
      <Box textAlign="center" my={10}>
        <Button onClick={openModal} colorScheme="teal" size="lg">
          Book Your Checkup
        </Button>
      </Box>

      {/* Checkup Form Modal */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <form onSubmit={sendEmail}>
              <Input name="first_name" placeholder="First Name" mb={3} />
              <Input name="last_name" placeholder="Last Name" mb={3} />
              <Input name="phone" placeholder="Phone Number" mb={3} />
              <Input name="issue" placeholder="Issue" mb={3} />
              <Input name="preferred_doctor" placeholder="Preferred Doctor" mb={3} />
              <Button type="submit" colorScheme="teal">Submit</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Reach Out Section */}
      <Box display="flex" flexWrap="wrap" justifyContent="center" p={10} bg="gray.200">
        <GlasmorphismCard icon={<FaPhone />} title="Phone" description="7307629938" />
        <GlasmorphismCard 
          icon={<FaWhatsapp />} 
          title="WhatsApp" 
          description="Contact us on WhatsApp" 
          link="https://wa.me/7307629938" />
        <GlasmorphismCard 
          icon={<FaInstagram />} 
          title="Instagram" 
          description="@jeevaas_hospital" 
          link="https://instagram.com/jeevaas_hospital" />
        <GlasmorphismCard 
          icon={<FaFacebook />} 
          title="Facebook" 
          description="Follow us on Facebook" 
          link="https://facebook.com/jeevaas_hospital" />
      </Box>

      {/* Footer */}
      <Box textAlign="center" p={5} bg="gray.800" color="white">
        © 2024 Jeevaas Hospital Private Limited. All rights reserved.
      </Box>
    </Box>
  );
}

// Glasmorphism Card Component
function GlasmorphismCard({ icon, title, description, link }) {
  return (
    <Box
      bg="rgba(255, 255, 255, 0.2)"
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      backdropFilter="blur(10px)"
      borderRadius="20px"
      p={5}
      textAlign="center"
      maxW="300px"
      minW="250px"
      m={4}
      _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s' }}
    >
      <Box fontSize="4xl" mb={3}>
        {icon}
      </Box>
      <Heading fontSize="xl" mb={3}>
        {title}
      </Heading>
      <Text mb={3}>{description}</Text>
      {link && (
        <Button as="a" href={link} target="_blank" colorScheme="teal">
          Go
        </Button>
      )}
    </Box>
  );
}
