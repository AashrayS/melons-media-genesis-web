
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import MissionSection from '@/components/MissionSection';
import LeadMagnetSection from '@/components/LeadMagnetSection';
import LeadMagnet from '@/components/LeadMagnet';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set up scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (    <div className="min-h-screen bg-gradient-to-br from-green-900 via-black to-green-800 text-white flex flex-col">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <LeadMagnetSection />
      <HowItWorksSection />
      <ProjectsSection />
      <TestimonialsSection />
      <MissionSection />
      <Footer />
      <LeadMagnet />
    </div>
  );
};

export default Index;
