import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './src/theme';
import Navigation from './src/components/Navigation';
import HeroSection from './src/components/HeroSection';
import AboutSection from './src/components/AboutSection';
import ProjectsSection from './src/components/ProjectsSection';
import CertificatesSection from './src/components/CertificatesSection';
import ContactSection from './src/components/ContactSection';
import Footer from './src/components/Footer';
import Chatbot from './src/components/Chatbot';


const PortfolioApp: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="certificates">
          <CertificatesSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
        <section id="chatbot">
  <Chatbot />
</section>
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default PortfolioApp;
