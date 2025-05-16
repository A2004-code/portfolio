const testimonials = [
  { name: 'Janny', image: '/assets/client1.jpg', quote: 'Amazing work! Highly recommended.' },
  { name: 'Mila', image: '/assets/client2.jpg', quote: 'Very professional and creative.' },
  { name: 'Luna', image: '/assets/client3.jpg', quote: 'Great communication and results.' },
  { name: 'John', image: '/assets/client4.jpg', quote: 'Delivered on time and exceeded expectations.' },
];

const Testimonials = () => (
  <section className="testimonials-section" data-aos="fade-up">
    <h2>Testimonials</h2>
    <div className="testimonial-list">
      {testimonials.map((t, idx) => (
        <div className="testimonial" key={idx} data-aos="zoom-in">
          <img src={t.image} alt={t.name} />
          <p>"{t.quote}"</p>
          <span>- {t.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials; 