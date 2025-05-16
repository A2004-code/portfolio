const About = () => (
  <section className="about-section" data-aos="fade-up">
    <h2 data-aos="fade-right">About Me</h2>
    <div className="about-details">
      <h3 className="highlight">Panga Avinash Yadav</h3>
      <p className="secondary">Junior Python Developer | DSA, OOPS & Data Science Focus</p>
      <p className="secondary">Kadapa, India | <a href="mailto:www.pangaavinashyadav@gmail.com">www.pangaavinashyadav@gmail.com</a></p>
      <div className="profile-summary" data-aos="fade-up">
        <h4>Profile Summary</h4>
        <p>Aspiring Junior Python Developer with strong foundational knowledge in Data Structures and Algorithms, Object-Oriented Programming, and Data Science. Demonstrates a passion for coding and continuous learning through self-study and online courses. Eager to apply theoretical concepts to practical problems and contribute to a dynamic development team. Ready to leverage problem-solving skills and analytical thinking in a professional setting.</p>
      </div>
      <div className="skills-languages-hobbies" style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem'}}>
        <div>
          <h4>Skills</h4>
          <ul>
            <li>Communication</li>
            <li>Creativity</li>
            <li>Problem-Solving</li>
            <li>Critical Thinking</li>
            <li>Time Management</li>
          </ul>
        </div>
        <div>
          <h4>Languages</h4>
          <ul>
            <li>Telugu</li>
            <li>English</li>
          </ul>
        </div>
        <div>
          <h4>Hobbies</h4>
          <ul>
            <li>Participating in coding contests and hackathons</li>
            <li>Passionate about Machine Learning and the future of Generative AI</li>
            <li>Exploring the power of ML and Gen AI to build smarter solutions</li>
            <li>Reading tech blogs, articles, and case studies</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About; 