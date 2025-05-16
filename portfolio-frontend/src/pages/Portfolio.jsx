import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Portfolio.css';

const projects = [
  {
    image: '/assets/project1.jpg',
    title: 'Graphic Design Project',
    description: 'Branding and print design for modern businesses.',
    category: 'graphic',
    technologies: ['Photoshop', 'Illustrator', 'InDesign'],
    link: '#'
  },
  {
    image: '/assets/project2.jpg',
    title: 'Web Design Project',
    description: 'Modern website UI/UX with responsive design.',
    category: 'web',
    technologies: ['React', 'CSS3', 'JavaScript'],
    link: '#'
  },
  {
    image: '/assets/project3.jpg',
    title: 'Photography Project',
    description: 'Creative photography and image editing.',
    category: 'photo',
    technologies: ['Lightroom', 'Photoshop'],
    link: '#'
  },
  {
    image: '/assets/project4.jpg',
    title: 'Logo Design',
    description: 'Minimalist logo design for brand identity.',
    category: 'graphic',
    technologies: ['Illustrator', 'Figma'],
    link: '#'
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="page-container">
      <section className="portfolio-section" data-aos="fade-up">
        <h2 className="section-title" data-aos="fade-right">My Portfolio</h2>
        
        <div className="portfolio-filters" data-aos="fade-up">
          <button 
            onClick={() => setFilter('all')} 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setFilter('graphic')} 
            className={`filter-btn ${filter === 'graphic' ? 'active' : ''}`}
          >
            Graphic Design
          </button>
          <button 
            onClick={() => setFilter('web')} 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
          >
            Web Design
          </button>
          <button 
            onClick={() => setFilter('photo')} 
            className={`filter-btn ${filter === 'photo' ? 'active' : ''}`}
          >
            Photography
          </button>
        </div>

        <div className="portfolio-grid">
          {filtered.map((project, idx) => (
            <div 
              className="portfolio-item" 
              data-aos="zoom-in" 
              data-aos-delay={idx * 100} 
              key={idx}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio; 