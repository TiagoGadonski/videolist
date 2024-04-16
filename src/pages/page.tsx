"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Menu from '../app/components/Menu';
import Content from '../app/components/Content';

const App = () => {
  // Inicializa o estado da linguagem com um valor padrão
  const [language, setLanguage] = useState('en-US');

  useEffect(() => {
    // Este código só será executado no cliente
    const initialLanguage = navigator.language.includes('pt') ? 'pt-BR' : navigator.language.includes('fr') ? 'fr-FR' : 'en-US';
    setLanguage(initialLanguage);
  }, []);

  return (
    <div>
      <Content language={language} />
    </div>
  );
};

export default App;
