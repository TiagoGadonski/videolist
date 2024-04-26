"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Menu from '../app/components/Menu';
import Content from '../app/components/Content';

const App = () => {

  const [language, setLanguageState] = useState('en-US');
  
  
  const setLanguage = (lang: string) => {
     setLanguageState(lang);  
  };

  useEffect(() => {
    
    const initialLanguage = navigator.language.includes('pt') ? 'pt-BR' : navigator.language.includes('fr') ? 'fr-FR' : 'en-US';
    setLanguage(initialLanguage); 
  }, []);

  return (
    <div>
      <Menu setLanguage={setLanguage} initialLanguage={language} />
      <Content language={language} />
    </div>
  );
};

export default App;
