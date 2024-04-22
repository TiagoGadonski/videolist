// components/ProjectCarousel.jsx
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

interface Project {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  url: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: 1,
    mode: "free-snap",
    breakpoints: {
      '(min-width: 768px)': {
        slides: 2,
      },
      '(min-width: 1200px)': {
        slides: 3,
      },
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {projects.map(project => (
        <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" className="keen-slider__slide">
          <img src={project.imageUrl} alt={project.name} style={{ width: "100%", borderRadius: "10px" }} />
          <div style={{ padding: "10px" }}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProjectCarousel;
