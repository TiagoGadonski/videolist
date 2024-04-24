// pages/portfolio.tsx
import React, { useState, useEffect } from 'react';
import ProjectCarousel from '../../app/components/ProjectCarousel';
import { Project } from '../../types';
import Menu from '../../app/components/Menu';

const projects = [
  {
    id: 1,
    name: "Projeto 1 - Clone do Spotify",
    description: "Clone da interface do usuário do Spotify usando React.",
    imageUrl: "/path/to/spotify_clone.jpg", // Certifique-se de que essas imagens estejam disponíveis no diretório público
    url: "https://spotifyclone.com"
  },
  {
    id: 2,
    name: "Projeto 2 - Portfolio Pessoal",
    description: "Um site de portfólio pessoal para exibir projetos de desenvolvimento web.",
    imageUrl: "/path/to/portfolio.jpg",
    url: "https://meuportfolio.com"
  },
  {
    id: 3,
    name: "Projeto 3 - E-commerce Shop",
    description: "Uma plataforma de e-commerce construída usando Next.js e Stripe para pagamentos.",
    imageUrl: "/path/to/ecommerce.jpg",
    url: "https://myecommerce.com"
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
