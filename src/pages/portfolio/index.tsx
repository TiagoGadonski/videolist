// pages/portfolio.tsx
import React from 'react';
import ProjectCarousel from '../../app/components/ProjectCarousel';
import { Project } from '../../types';

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
  return (
    <div>
      <h1>Portfolio</h1>
      <ProjectCarousel projects={projects} />
    </div>
  );
};

export default PortfolioPage;
