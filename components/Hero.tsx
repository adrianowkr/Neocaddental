
import React from 'react';

interface HeroProps {
  data: {
    headline: string;
    subheadline: string;
    cta: string;
    ctaLink: string;
  };
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector(data.ctaLink)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(247, 250, 252, 0.8), rgba(247, 250, 252, 1)), url('https://picsum.photos/id/1015/1920/1080')" }}>
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-light via-light/80 to-transparent"></div>
      <div className="container mx-auto px-6 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-dark mb-4 animate-fade-in-down">{data.headline}</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in-up">{data.subheadline}</p>
        <a href={data.ctaLink} onClick={handleCtaClick} className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 shadow-lg">
          {data.cta}
        </a>
      </div>
    </section>
  );
};

export default Hero;
