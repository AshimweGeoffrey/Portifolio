export default function ArticleCard() {
  return (
    <div className="article-card">
      <h2>01/Article Title</h2>
      <p>Brief summary of the article...</p>
      <img
        src="https://plus.unsplash.com/premium_photo-1726729274971-4ef1018ee08a?q=80&w=768&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Article Image"
      />
      <div>
        <span className="tag">React</span>
        <span className="tag">TypeScript</span>
        <span className="tag">Web Development</span>
      </div>
    </div>
  );
}
