import React from 'react';

interface ContactInfo {
    name: string;
    email: string;
    phone: string;
}

interface ContactProps {
  data: {
    title: string;
    subtitle: string;
    contacts: ContactInfo[];
  };
  personal: {
    name: string;
    teamName: string;
    title: string;
  };
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-dark">{data.title}</h2>
        <p className="text-lg text-gray-600 mt-2 mb-8 max-w-2xl mx-auto">{data.subtitle}</p>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16">
          {data.contacts.map((contact) => (
            <div key={contact.name} className="text-center">
                <h4 className="text-xl font-bold text-dark mb-2">{contact.name}</h4>
                <div className="flex flex-col items-center gap-2">
                    <a href={`mailto:${contact.email}`} className="text-lg text-primary hover:underline font-semibold">
                        {contact.email}
                    </a>
                    <a href={`tel:${contact.phone.replace(/\D/g,'')}`} className="text-lg text-primary hover:underline font-semibold">
                        {contact.phone}
                    </a>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;