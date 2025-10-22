
import React from 'react';
import type { Service } from '../types';
import Card from './Card';

interface ServicesProps {
  data: {
    title: string;
    subtitle: string;
    services: Service[];
  };
}

const Services: React.FC<ServicesProps> = ({ data }) => {
  return (
    <section id="servicos" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">{data.title}</h2>
          <p className="text-lg text-gray-600 mt-2">{data.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-8">
              <div className="p-4 bg-primary/10 rounded-full text-primary mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
