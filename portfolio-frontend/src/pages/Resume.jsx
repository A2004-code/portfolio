const Resume = () => (
  <section className="resume-section" data-aos="fade-up">
    <h2 data-aos="fade-right">Resume</h2>
    <div className="profile-summary" data-aos="fade-up">
      <h3>Profile Summary</h3>
      <p>Aspiring Junior Python Developer with strong foundational knowledge in Data Structures and Algorithms, Object-Oriented Programming, and Data Science. Demonstrates a passion for coding and continuous learning through self-study and online courses. Eager to apply theoretical concepts to practical problems and contribute to a dynamic development team. Ready to leverage problem-solving skills and analytical thinking in a professional setting.</p>
    </div>
    <div className="experience" data-aos="fade-up">
      <h3>Work Experience</h3>
      <ul>
        <li>
          <b>Python Developer (Freelance)</b><br />
          <span className="secondary">Self-Employed / Freelance, Tirupati &mdash; <i>Jan 2025 - Present</i></span>
          <ul>
            <li>Developed and maintained scalable Python applications, improving performance by 30 percent</li>
            <li>Collaborated with cross-functional teams to integrate user feedback, enhancing user satisfaction by 25 percent</li>
            <li>Automated data processing workflows, reducing manual processing time by 40 hours per month</li>
            <li>Led code reviews and provided mentorship to junior developers, fostering a collaborative and growth-oriented environment</li>
            <li>Utilized libraries such as Pandas, NumPy, and Flask to streamline development processes</li>
            <li>Identified and resolved critical bugs, improving application stability and user experience</li>
            <li>Conducted thorough testing and debugging, achieving a 95 percent bug-free release rate</li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="education" data-aos="fade-up">
      <h3>Education</h3>
      <ul>
        <li>
          <b>B.Tech In Artificial Intelligence & Machine Learning (2nd Year)</b><br />
          <span className="secondary">Mohan Babu University, Rangampet, Tirupati, Andhra Pradesh, India &mdash; <i>Sep 2023 - Present</i></span><br />
          <ul>
            <li>Core courses include Machine Learning, Data Structures, Algorithms, AI Ethics, Neural Networks, and Computer Vision.</li>
            <li>Skills gained include programming in Python, R, and Java, data analysis, model building, and algorithm optimization.</li>
            <li>Hands-on experience with projects on image recognition, natural language processing, and predictive analytics.</li>
            <li>Practical projects involve using frameworks like TensorFlow, Keras, and PyTorch.</li>
            <li>Competencies in statistical analysis, big data management, and cloud computing.</li>
            <li>Proficiency in using tools such as Jupyter Notebook, MATLAB, and GitHub.</li>
            <li>Learning outcomes include developing AI models, understanding ethical implications, and deploying AI solutions.</li>
          </ul>
        </li>
      </ul>
    </div>
    <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-btn" data-aos="fade-left">Download Resume (PDF)</a>
  </section>
);

export default Resume; 