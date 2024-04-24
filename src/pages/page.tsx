"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Menu from '../app/components/Menu';
import Content from '../app/components/Content';

const App = () => {
  // Inicializa o estado da linguagem com um valor padrão
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
      <Content language={language} />
    </div>
  );
};

export default App;
