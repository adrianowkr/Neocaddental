import { GoogleGenAI } from "@google/genai";
import type { Service, Plan, QuizQuestion } from '../types';

// FIX: Initialize GoogleGenAI client according to guidelines, using API_KEY directly from environment variables.
// The API key must be provided via `process.env.API_KEY`. The placeholder and warning logic has been removed.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateRecommendation = async (
    answers: string[], 
    questions: QuizQuestion[],
    services: Service[],
    plans: Plan[]
): Promise<string> => {
    
    const userProfile = questions.map((q, i) => `- ${q.question}\n  Resposta: ${answers[i]}`).join('\n');

    const availableServices = services.map(s => `* ${s.title}: ${s.description}`).join('\n');
    const availablePlans = plans.map(p => `* ${p.title} (${p.price}${p.period}): Ideal para quem precisa de ${p.features.join(', ')}`).join('\n');

    const prompt = `Você é um consultor especialista em odontologia digital e Exocad, trabalhando para a Neocad Dental. Seu objetivo é analisar as respostas de um cliente em potencial e recomendar a melhor combinação de serviços e planos de assinatura de forma amigável e profissional.

**Perfil do Cliente em Potencial:**
${userProfile}

**Serviços e Planos Disponíveis:**

**Serviços:**
${availableServices}

**Planos de Assinatura:**
${availablePlans}

**Sua Tarefa:**
Com base no perfil do cliente, escreva uma recomendação personalizada.
1. Comece com uma saudação amigável.
2. Analise brevemente as respostas do cliente, mostrando que você entendeu suas necessidades.
3. Recomende 1 ou 2 serviços que mais se aplicam ao caso dele, explicando o porquê.
4. Sugira o plano de assinatura mais adequado, justificando sua escolha com base nos benefícios.
5. Termine com um call-to-action, incentivando o cliente a entrar em contato com Adriano Walker e Lucas Izidio da Neocad Dental para começar.
6. Mantenha o tom profissional, mas acessível e encorajador. Formate sua resposta usando markdown para melhor legibilidade (títulos, negrito e listas).`;

    try {
        // FIX: Removed mock response logic. All requests will now go to the Gemini API.
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to generate recommendation from Gemini API.");
    }
};