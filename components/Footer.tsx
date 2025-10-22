import React from 'react';

interface FooterProps {
  data: {
    copyright: string;
  };
  personal: {
    name: string;
    teamName: string;
    title: string;
  };
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer className="bg-dark text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">{data.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;