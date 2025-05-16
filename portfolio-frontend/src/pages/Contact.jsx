const Contact = () => (
  <section className="contact-section" data-aos="fade-up">
    <h2>Contact</h2>
    <form
      action="https://formspree.io/f/mwpoyqag"
      method="POST"
      className="contact-form"
    >
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
      <input type="hidden" name="_redirect" value="/thankyou" />
      <button type="submit">Send</button>
    </form>
    <div className="contact-info">
      <p>Email: www.pangaavinashyadav@gmail.com</p>
    </div>
  </section>
);

export default Contact; 