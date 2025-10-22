import React from 'react';
import type { Service, Plan, QuizData } from './types';
import { BarChartIcon, BrushIcon, CodeIcon, HeadsetIcon, LifeBuoyIcon, ShoppingCartIcon } from './components/Icons';

export const personalInfo = {
  name: 'Adriano Walker & Lucas Izidio',
  teamName: 'Neocad Dental',
  title: 'Especialistas em Odontologia Digital & Exocad',
};

export const headerData = {
  logo: 'Neocad Dental',
  navLinks: [
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#planos', label: 'Planos' },
    { href: '#quiz', label: 'Consultoria IA' },
    { href: '#contato', label: 'Contato' },
  ],
};

export const heroData = {
  headline: 'Soluções Completas em Exocad para Odontologia Digital',
  subheadline: 'De instalações e treinamentos a suporte técnico e design CAD. Transforme sua prática odontológica com a ajuda de nossos especialistas.',
  cta: 'Descubra a Solução Ideal',
  ctaLink: '#quiz',
};

export const aboutData = {
  title: 'Sobre Nós',
  name: 'Adriano Walker & Lucas Izidio',
  description: `Olá! Somos Adriano Walker e Lucas Izidio, fundadores da Neocad Dental. Apaixonados por tecnologia e odontologia, nossa missão é simplificar a transição de dentistas e laboratórios para o fluxo digital.
  
  Combinando nossas experiências em odontologia digital, web design e especialização em CAD com foco em Exocad, oferecemos uma gama completa de soluções: desde a instalação e configuração do Exocad até treinamentos personalizados, suporte contínuo e serviços de design. Entendemos os desafios do dia a dia e estamos aqui para garantir que você extraia o máximo potencial da tecnologia, otimizando seu tempo e elevando a qualidade do seu trabalho.`,
  imageUrl: 'asset-url:0',
};

export const servicesData: { title: string; subtitle: string; services: Service[] } = {
  title: 'Nossos Serviços',
  subtitle: 'Tudo que você precisa para dominar a odontologia digital com Exocad.',
  services: [
    {
      icon: React.createElement(ShoppingCartIcon),
      title: 'Revenda e Instalação Exocad',
      description: 'Adquira e instale a versão mais recente do Exocad com segurança e suporte completo durante todo o processo.'
    },
    {
      icon: React.createElement(HeadsetIcon),
      title: 'Suporte Técnico Especializado',
      description: 'Solucione problemas rapidamente com um suporte técnico ágil e eficiente, focado nas suas necessidades diárias.'
    },
    {
      icon: React.createElement(BarChartIcon),
      title: 'Treinamentos Personalizados',
      description: 'Capacitação para você e sua equipe, do básico ao avançado, com treinamentos adaptados à sua realidade e objetivos.'
    },
    {
      icon: React.createElement(BrushIcon),
      title: 'Serviços de Design CAD',
      description: 'Precisa de ajuda com um caso? Terceirize seus planejamentos e designs de próteses, guias cirúrgicos e mais.'
    },
    {
      icon: React.createElement(LifeBuoyIcon),
      title: 'Consultoria Estratégica',
      description: 'Ajudamos você a estruturar seu fluxo de trabalho digital, otimizar processos e escolher os melhores equipamentos.'
    },
    {
      icon: React.createElement(CodeIcon),
      title: 'Páginas de Vendas para Clínicas',
      description: 'Como web designers, criamos páginas de vendas e sites institucionais para clínicas e laboratórios que desejam mais clientes.'
    },
  ]
};

export const pricingData: { title: string; subtitle: string; plans: Plan[] } = {
  title: 'Nossos Planos e Assinaturas',
  subtitle: 'Escolha o plano ideal para ter suporte e tranquilidade contínua no seu fluxo de trabalho digital.',
  plans: [
    {
      title: 'Suporte Essencial',
      price: 'R$197',
      period: '/mês',
      features: [
        'Suporte via WhatsApp',
        'Até 2 chamadas de vídeo/mês',
        'Resolução de problemas comuns',
        'Dicas de otimização'
      ],
      isFeatured: false,
      cta: 'Assinar Agora'
    },
    {
      title: 'Plano Profissional',
      price: 'R$397',
      period: '/mês',
      features: [
        'Tudo do plano Essencial',
        'Suporte prioritário',
        'Até 5 chamadas de vídeo/mês',
        '1 hora de treinamento mensal',
        'Revisão de designs'
      ],
      isFeatured: true,
      cta: 'Assinar Agora'
    },
    {
      title: 'Parceria Premium',
      price: 'R$797',
      period: '/mês',
      features: [
        'Tudo do plano Profissional',
        'Suporte ilimitado',
        'Chamadas de vídeo ilimitadas',
        '3 horas de treinamento mensal',
        'Serviço de design (até 5 casos/mês)'
      ],
      isFeatured: false,
      cta: 'Assinar Agora'
    },
  ]
};

export const quizData: QuizData = {
  title: 'Consultoria com IA',
  subtitle: 'Não sabe por onde começar? Responda 3 perguntas rápidas e nossa IA irá sugerir a solução perfeita para você.',
  cta: 'Iniciar Quiz',
  questions: [
    {
      question: 'Qual é o seu nível de experiência atual com o Exocad?',
      options: [
        'Nenhum, estou começando agora.',
        'Básico, sei fazer o essencial mas me sinto limitado.',
        'Intermediário, uso diariamente mas quero otimizar.',
        'Avançado, domino o software mas busco soluções específicas.'
      ],
    },
    {
      question: 'Qual é o seu maior desafio na odontologia digital hoje?',
      options: [
        'Instalar e configurar o software corretamente.',
        'Resolver problemas técnicos e erros que aparecem.',
        'Aprender a usar todos os recursos do Exocad.',
        'Falta de tempo para realizar os designs dos casos.',
      ],
    },
    {
      question: 'O que você mais valoriza em um parceiro de tecnologia?',
      options: [
        'Disponibilidade para tirar dúvidas rápidas.',
        'Capacidade de treinar minha equipe de forma eficaz.',
        'Conhecimento técnico profundo para resolver problemas complexos.',
        'Uma solução completa que cuide de tudo para mim.',
      ],
    },
  ],
};

export const contactData = {
    title: 'Vamos Conversar?',
    subtitle: 'Entre em contato para tirar dúvidas, solicitar um orçamento ou simplesmente para falarmos sobre odontologia digital.',
    contacts: [
        {
            name: 'Adriano Walker',
            email: 'adriano.walker@email.com',
            phone: '+55 (11) 91234-5678',
        },
        {
            name: 'Lucas Izidio',
            email: 'lucas.izidio@email.com',
            phone: '+55 (11) 98765-4321',
        }
    ]
};

export const footerData = {
    copyright: '© 2024 Neocad Dental. Todos os direitos reservados.',
};