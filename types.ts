import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Plan {
  title: string;
  price: string;
  period: string;
  features: string[];
  isFeatured: boolean;
  cta: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
}

export interface QuizData {
  title: string;
  subtitle: string;
  cta: string;
  questions: QuizQuestion[];
}