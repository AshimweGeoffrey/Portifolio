import Message from "./Article/Message";
import ArticleCard from "../components/Article/ArticleCard";
export default function Articles() {
  return (
    <div className="articles-page">
      <Message />
      <div>
        <ArticleCard />
      </div>
    </div>
  );
}
