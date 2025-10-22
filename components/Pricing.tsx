
import React from 'react';
import type { Plan } from '../types';
import Card from './Card';

interface PricingProps {
  data: {
    title: string;
    subtitle: string;
    plans: Plan[];
  };
}

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

const Pricing: React.FC<PricingProps> = ({ data }) => {
  return (
    <section id="planos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">{data.title}</h2>
          <p className="text-lg text-gray-600 mt-2">{data.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {data.plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`flex flex-col p-8 ${plan.isFeatured ? 'border-2 border-primary transform scale-105' : 'border border-gray-200'}`}
            >
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Mais Popular</div>
              )}
              <h3 className="text-2xl font-bold text-dark text-center mb-2">{plan.title}</h3>
              <div className="text-center mb-6">
                <span className="text-5xl font-extrabold text-dark">{plan.price}</span>
                <span className="text-lg text-gray-500">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <CheckIcon />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${plan.isFeatured ? 'bg-primary text-white hover:bg-blue-700' : 'bg-gray-200 text-dark hover:bg-gray-300'}`}>
                {plan.cta}
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
