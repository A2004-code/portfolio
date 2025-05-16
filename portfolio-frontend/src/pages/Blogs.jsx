import BlogCard from '../components/BlogCard';

const blogs = [
  {
    title: 'My Journey into Python Development',
    summary: `I started my Python journey as a beginner exploring simple print statements and now I'm building APIs and working with data structures. Python's readability made learning fun, and it opened doors to backend development, automation, and machine learning.`,
    keyPoints: [
      'Learned Python basics like loops, functions, and OOPs',
      'Built small CLI tools and projects',
      'Currently exploring FastAPI for backend and DSA for problem-solving',
    ],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
    link: '#'
  },
  {
    title: 'Solving DSA Problems on HackerRank',
    summary: `DSA is the foundation of efficient programming. Solving problems daily on HackerRank helped me understand arrays, strings, and recursion better. Initially, I needed help, but consistency improved my problem-solving.`,
    keyPoints: [
      'Focused on one topic at a time (like arrays, strings, etc.)',
      'Tracked progress and noted patterns',
      'Aim: Solve 300+ DSA problems in Python',
    ],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    link: '#'
  },
  {
    title: 'Getting Started with Machine Learning',
    summary: `I recently started learning ML. It's fascinating to see how data can train models to make predictions. I'm currently focusing on understanding linear regression, data preprocessing, and using Scikit-learn.`,
    keyPoints: [
      'Learning from YouTube and small projects',
      'Practicing with Pandas and NumPy',
      'Plan: Build small ML projects like price prediction or spam detection',
    ],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    link: '#'
  },
  {
    title: 'Why I Built My Portfolio with React and Tailwind',
    summary: `I chose React for my portfolio because it's component-based and easy to manage. Tailwind CSS helped me design a modern UI quickly. The project taught me real-world frontend development.`,
    keyPoints: [
      'Learned how to manage components and props in React',
      'Used Tailwind for responsive design',
      'Plan: Add a blog system and project upload feature',
    ],
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    link: '#'
  },
  {
    title: 'APIs – The Bridge Between Frontend and Backend',
    summary: `APIs are the link that lets the frontend talk to the backend. Using FastAPI, I learned to build endpoints and connect them with frontend tools. This gave me a full-stack understanding.`,
    keyPoints: [
      'Created GET/POST endpoints with FastAPI',
      'Connected frontend using fetch/axios',
      'Future: Build a chatbot using OpenAI API',
    ],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    link: '#'
  },
];

const Blogs = () => (
  <section className="blogs-section">
    <h2>Blogs</h2>
    <div className="blog-list">
      {blogs.map((blog, idx) => (
        <BlogCard key={idx} {...blog} />
      ))}
    </div>
  </section>
);

export default Blogs; 