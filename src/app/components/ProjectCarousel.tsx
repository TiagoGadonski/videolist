import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

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
        <div key={project.id} className="keen-slider__slide position-relative">
          <Image
            src={project.imageUrl}
            alt={project.name}
            layout="responsive" // Adjusted from 'fill' to 'responsive' for more controlled sizing
            width={500} // Specify your desired width
            height={300} // Specify your desired height
            className="img-fluid"
          />
          <div className="position-absolute top-50 start-50 translate-middle text-center"
               style={{ width: "90%", height: "60%", background: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(8px)" }}>
            <h3 className="text-white fs-5">{project.name}</h3>
            <p className="text-white">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCarousel;
