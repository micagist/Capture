import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnim } from "../animation";
import ScrollTop from "../components/ScrollTop";

const AboutUs = () => {
  return (
    <motion.div exit="exit" variants={pageAnim} initial="hidden" animate="show">
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
