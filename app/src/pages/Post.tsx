import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getPostBySlug } from "../posts";

export default function Post() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="container">
        <h1 id="name">not found</h1>
        <div id="bio2">
          <p>we couldn't find that blog post.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 id="name">{post.title}</h1>
      <div id="bio1">{post.date}</div>
      <div id="bio2">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
}
