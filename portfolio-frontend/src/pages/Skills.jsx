const skills = [
  {
    name: 'Python',
    level: 'Advanced',
    description: 'Expert in Python programming with extensive experience in various libraries and frameworks',
    technologies: ['Django', 'Flask', 'NumPy', 'Pandas', 'Matplotlib']
  },
  {
    name: 'Data Structures & Algorithms',
    level: 'Advanced',
    description: 'Strong foundation in algorithmic problem-solving and optimization',
    technologies: ['Arrays', 'Linked Lists', 'Trees', 'Graphs', 'Dynamic Programming']
  },
  {
    name: 'Object-Oriented Programming',
    level: 'Advanced',
    description: 'Extensive experience in OOP principles and design patterns',
    technologies: ['Inheritance', 'Polymorphism', 'Encapsulation', 'SOLID Principles']
  },
  {
    name: 'Data Science',
    level: 'Intermediate',
    description: 'Experience in data analysis and visualization',
    technologies: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn']
  },
  {
    name: 'Frontend Development',
    level: 'Intermediate',
    description: 'Building responsive and interactive web applications',
    technologies: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap']
  },
  {
    name: 'API Development',
    level: 'Intermediate',
    description: 'Creating and integrating RESTful APIs',
    technologies: ['REST', 'FastAPI', 'Django REST', 'Swagger/OpenAPI']
  },
  {
    name: 'Backend Development',
    level: 'Intermediate',
    description: 'Building scalable server-side applications',
    technologies: ['Django', 'Flask', 'SQL', 'MongoDB', 'Redis']
  },
  {
    name: 'Machine Learning (Aspirant)',
    level: 'Beginner',
    description: 'Learning ML concepts and implementations',
    technologies: ['Scikit-learn', 'TensorFlow', 'Neural Networks']
  },
  {
    name: 'Communication',
    level: 'Advanced',
    description: 'Excellent verbal and written communication skills',
    technologies: ['Technical Writing', 'Documentation', 'Team Collaboration']
  },
  {
    name: 'Creativity',
    level: 'Advanced',
    description: 'Innovative problem-solving and design thinking',
    technologies: ['UI/UX Design', 'Creative Solutions', 'Innovation']
  },
  {
    name: 'Problem-Solving',
    level: 'Advanced',
    description: 'Strong analytical and debugging skills',
    technologies: ['Debugging', 'Code Optimization', 'System Design']
  }
];

const levelColor = (level) => {
  switch (level) {
    case 'Advanced': return '#1de9b6';
    case 'Intermediate': return '#e600ff';
    case 'Beginner': return '#aaa';
    default: return '#fff';
  }
};

const Skills = () => (
  <section className="skills-section" data-aos="fade-up">
    <h2 data-aos="fade-right">Skills & Expertise</h2>
    <div className="skills-list" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '2rem',
      marginTop: '2rem'
    }}>
      {skills.map((skill, idx) => (
        <div key={skill.name} className="skill-card magnetic-btn" data-aos="zoom-in" style={{
          background: '#181818',
          borderRadius: '10px',
          padding: '1.5rem',
          boxShadow: '0 2px 16px rgba(230,0,255,0.08)',
          color: '#fff',
        }}>
          <h3 style={{
            color: levelColor(skill.level),
            marginBottom: '0.5rem',
            fontSize: '1.3rem'
          }}>{skill.name}</h3>
          <div style={{
            height: '8px',
            background: '#222',
            borderRadius: '4px',
            margin: '0.5rem 0'
          }}>
            <div style={{
              width: skill.level === 'Advanced' ? '100%' : skill.level === 'Intermediate' ? '70%' : '40%',
              height: '100%',
              background: levelColor(skill.level),
              borderRadius: '4px',
              transition: 'width 0.6s'
            }}></div>
          </div>
          <span style={{
            color: levelColor(skill.level),
            fontWeight: 'bold',
            display: 'block',
            marginBottom: '1rem'
          }}>{skill.level}</span>
          <p style={{
            color: '#aaa',
            fontSize: '0.9rem',
            marginBottom: '1rem'
          }}>{skill.description}</p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            {skill.technologies.map(tech => (
              <span key={tech} style={{
                background: '#222',
                padding: '0.3rem 0.8rem',
                borderRadius: '15px',
                fontSize: '0.8rem',
                color: levelColor(skill.level)
              }}>{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills; 