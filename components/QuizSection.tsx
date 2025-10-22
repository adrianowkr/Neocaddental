
import React, { useState } from 'react';
import type { QuizData, Service, Plan } from '../types';
import { generateRecommendation } from '../services/geminiService';
import Card from './Card';
import Modal from './Modal';

interface QuizSectionProps {
  data: QuizData;
  services: Service[];
  plans: Plan[];
}

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
);

const QuizSection: React.FC<QuizSectionProps> = ({ data, services, plans }) => {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const startQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setError(null);
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (currentQuestion < data.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit(newAnswers);
    }
  };

  const handleSubmit = async (finalAnswers: string[]) => {
    setIsLoading(true);
    setCurrentQuestion(-1); // Hide questions
    setIsModalOpen(true);
    try {
      const recommendation = await generateRecommendation(finalAnswers, data.questions, services, plans);
      setResult(recommendation);
    } catch (e) {
      setError('Ocorreu um erro ao gerar sua recomendação. Por favor, tente novamente.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };
  
  const resetQuiz = () => {
    setIsModalOpen(false);
    // Delay resetting state to allow modal to close smoothly
    setTimeout(() => {
        setCurrentQuestion(-1);
        setAnswers([]);
        setResult(null);
        setError(null);
        setIsLoading(false);
    }, 300);
  }

  return (
    <section id="quiz" className="py-20 bg-primary/5">
      <div className="container mx-auto px-6">
        <Card className="p-8 md:p-12 text-center bg-white">
          {currentQuestion === -1 && !isModalOpen && (
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-dark">{data.title}</h2>
              <p className="text-lg text-gray-600 mt-2 mb-8 max-w-2xl mx-auto">{data.subtitle}</p>
              <button onClick={startQuiz} className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 shadow-lg">
                {data.cta}
              </button>
            </>
          )}

          {currentQuestion > -1 && (
            <div>
              <p className="text-sm text-gray-500 mb-2">Pergunta {currentQuestion + 1} de {data.questions.length}</p>
              <h3 className="text-2xl font-semibold text-dark mb-8">{data.questions[currentQuestion].question}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.questions[currentQuestion].options.map((option, index) => (
                  <button key={index} onClick={() => handleAnswer(option)} className="p-4 border-2 border-gray-200 rounded-lg text-left hover:border-primary hover:bg-primary/10 transition-all duration-200">
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </Card>

        <Modal isOpen={isModalOpen} onClose={resetQuiz}>
            <div className="p-6">
                <h3 className="text-2xl font-bold text-dark mb-4 text-center">Sua Recomendação Personalizada</h3>
                {isLoading && <LoadingSpinner />}
                {error && <p className="text-red-500 text-center">{error}</p>}
                {result && (
                    <div className="prose max-w-none text-gray-700 whitespace-pre-wrap">
                        {result}
                    </div>
                )}
                <div className="text-center mt-6">
                    <button onClick={resetQuiz} className="bg-gray-200 text-dark font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 transition-colors">
                        {result || error ? 'Fechar' : 'Cancelar'}
                    </button>
                </div>
            </div>
        </Modal>
      </div>
    </section>
  );
};

export default QuizSection;
