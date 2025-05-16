import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import '../styles/Home.css';
import galaxyImg from '../assets/new-galaxy.jpg'; // Import the image

// Use the new galaxy image provided by the user
const parallaxBg = galaxyImg;

const Home = () => (
  <div className="home-container">
    <Parallax 
      bgImage={parallaxBg} 
      strength={400} 
      bgImageStyle={{ 
        minHeight: '100vh',
        filter: 'brightness(0.3) blur(2px)'
      }}
    >
      <section className="home-section">
        <div className="content-wrapper" data-aos="fade-up">
          <h1 data-aos="fade-right" data-aos-delay="200">
            Hi there!<br />
            I'm <span className="highlight">Panga Avinash Yadav</span>
          </h1>
          <h2 data-aos="fade-right" data-aos-delay="400">
            Python Developer | Backend & Frontend | Data Science<br />
            Strong in DSA, OOPs, API Integration<br />
            ML Learner | Focused on Building Real-World Projects
          </h2>
          <Link 
            to="/about" 
            className="cta-btn" 
            data-aos="fade-up" 
            data-aos-delay="600"
          >
            More About Me
          </Link>
        </div>
      </section>
    </Parallax>
  </div>
);

export default Home; 