
import React from 'react';

interface AboutProps {
  data: {
    title: string;
    name: string;
    description: string;
    imageUrl: string;
  };
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">{data.title}</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src={data.imageUrl} alt={data.name} className="rounded-lg shadow-2xl w-full max-w-md mx-auto" />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-primary mb-4">{data.name}</h3>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">{data.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
