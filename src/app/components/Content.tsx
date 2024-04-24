import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Definindo tipos para as props
interface ContentProps {
  language: string;  // Definindo que language é uma string
}

const Content: React.FC<ContentProps> = ({ language }) => {
  // Estado que armazena a lista de IDs de vídeos da playlist atual
  const [playlist, setPlaylist] = useState<string[]>([]);
  // Estado que armazena o ID do vídeo principal
  const [mainVideoId, setMainVideoId] = useState<string>('');

  // Efeito para atualizar a playlist e o vídeo principal com base no idioma selecionado
  useEffect(() => {
    const playlists: { [key: string]: string[] } = {
      'en-US': ['cTLngWAaIkA', 'CRf_-8yN9es'],
      'pt-BR': ['zdvdBC4aF8w', 'ZcPm9-NPomI'],
      'fr-FR': ['Usc2nYeDumI', '_5FeQfyVLQ8']
    };
    setPlaylist(playlists[language] || []);
    setMainVideoId(playlists[language][0]);  // Define o primeiro vídeo da lista como o principal
  }, [language]);

  // Função para mudar o vídeo principal quando uma miniatura é clicada
  const handleVideoSelect = (videoId: string) => {
    setMainVideoId(videoId);
  };

  return (
    <div className="container mt-4">
      <div className="video-container card mb-3 mx-auto" style={{ maxWidth: '900px', borderRadius: '15px', overflow: 'hidden' }}>
        {mainVideoId && (
          <iframe
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${mainVideoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="video-thumbnails-container d-flex justify-content-center overflow-auto">
        {playlist.map((videoId, index) => (
          <div key={index} onClick={() => handleVideoSelect(videoId)} className="video-thumbnail card mx-1" style={{ cursor: 'pointer', width: '120px', height: '90px', borderRadius: '10px', overflow: 'hidden' }}>
            <img
              className="card-img-top"
              src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
              alt="Video thumbnail"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
