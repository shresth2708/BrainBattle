import '../styles/Blog.css';
 function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Boost Your Memory with Daily Quizzes",
      date: "June 7, 2025",
      author: "Agnik Misra",
      content: "Taking a short quiz every day is like a gym workout for your brain. Studies show that daily mental challenges improve long-term memory and focus. Whether it's 5 or 50 questions, consistent quizzing helps keep your brain sharp!",
      image: "../../assets/images/blog/blogimage5.jpeg"
    },
    {
      id: 2,
      title: "From Casual Player to Quiz Champion: Here's How",
      date: "June 7, 2025",
      author: "Agnik Misra",
      content: "Want to dominate trivia games? Start small – focus on your strengths, revise what you miss, and gradually expand your knowledge base. Practice regularly, track your performance, and you'll soon climb from rookie to pro!",
      image: "../../assets/images/blog/blogimage6.jpeg"
    },
    {
      id: 3,
      title: "Why Leaderboards Motivate You to Play More",
      date: "June 7, 2025",
      author: "Agnik Misra",
      content: "Leaderboards aren't just for bragging rights – they boost motivation, encourage healthy competition, and push you to improve. Seeing your name rise in the ranks can be the spark that turns casual gaming into a fun habit.",
      image: "../../assets/images/blog/blogimage7.jpeg"
    },
    {
      id: 4,
      title: "Quiz Battles: Challenge Your Friends in Real-Time!",
      date: "June 7, 2025",
      author: "Agnik Misra",
      content: "Solo quizzes are great, but playing against friends adds a whole new thrill. With real-time quiz battles, you can challenge buddies, compare scores instantly, and enjoy endless fun while learning together.",
      image: "../../assets/images/blog/blogimage8.jpeg"
    }
    
  ];

  return (
    <div className="blog-container">
      <h2>Trivia Blog</h2>
      
      <div className="blog-posts">
        {blogPosts.map(post => (
          <article key={post.id} className="blog-post">
            <div className="blog-post-content">
              <h3>{post.title}</h3>
              <div className="post-meta">
                <span className="post-date">{post.date}</span>
                <span className="post-author">by {post.author}</span>
              </div>
              <div className="post-content">
                {post.content.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="blog-post-image">
              <img src={post.image} alt={post.title} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog;