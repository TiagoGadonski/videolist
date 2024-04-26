// pages/portfolio.tsx
import React, { useState, useEffect } from 'react';
import ProjectCarousel from '../../app/components/ProjectCarousel';
import { Project } from '../../types';
import Menu from '../../app/components/Menu';

const projects = [
  {
    id: 1,
    name: "Projeto 1 - Tetris Game",
    description: "Jogo do Tetris",
    imageUrl: "/tetris.png", 
    url: "https://tetrisjsonly.netlify.app/"
  },
  {
    id: 2,
    name: "Projeto 2 - Site de banco",
    description: "Um site de banco",
    imageUrl: "/bankaccount.png",
    url: "https://bank-site-tiago.netlify.app/"
  },
  {
    id: 3,
    name: "Projeto 3 - Conversor de Moedas",
    description: "Conversor de moedas com todos tipos disponiveis.",
    imageUrl: "/conversor.png",
    url: "https://conversordemoedastgoco.netlify.app/"
  }
];

const PortfolioPage: React.FC = () => {
  const [language, setLanguageState] = useState('en-US');
  
  // Função para atualizar o estado da linguagem e logar mudanças
  const setLanguage = (lang: string) => {
    console.log("Language set to:", lang);
    setLanguageState(lang);  // Atualiza o estado
  };

  useEffect(() => {
    // Este código só será executado no cliente
    const initialLanguage = navigator.language.includes('pt') ? 'pt-BR' : navigator.language.includes('fr') ? 'fr-FR' : 'en-US';
    setLanguage(initialLanguage);  // Define o idioma inicial baseado no navegador
  }, []);
  return (
    <div>
      <Menu setLanguage={setLanguage} initialLanguage={language} />
      <h1>Portfolio</h1>
      <ProjectCarousel projects={projects} />
    </div>
  );
};

export default PortfolioPage;
