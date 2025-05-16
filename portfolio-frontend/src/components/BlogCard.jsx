const BlogCard = ({ title, summary, image, link, keyPoints }) => (
  <div className="blog-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{summary}</p>
    {keyPoints && (
      <ul className="blog-keypoints">
        {keyPoints.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    )}
    <a href={link} target="_blank" rel="noopener noreferrer">Read More</a>
  </div>
);

export default BlogCard; 