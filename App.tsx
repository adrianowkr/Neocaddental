
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import QuizSection from './components/QuizSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { personalInfo, headerData, heroData, aboutData, servicesData, pricingData, quizData, contactData, footerData } from './config';

const App: React.FC = () => {
  return (
    <div className="bg-light text-dark font-sans">
      <Header data={headerData} />
      <main>
        <Hero data={heroData} />
        <About data={aboutData} />
        <Services data={servicesData} />
        <Pricing data={pricingData} />
        <QuizSection data={quizData} services={servicesData.services} plans={pricingData.plans} />
        <Contact data={contactData} personal={personalInfo} />
      </main>
      <Footer data={footerData} personal={personalInfo} />
    </div>
  );
};

export default App;
