import { Link } from "react-router-dom";
import { posts } from "../posts";

export default function Blogs() {
  return (
    <div className="container">
      <h1 id="name">blogs</h1>
      <div id="bio2">
        {posts.length === 0 ? (
          <p>no posts yet.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {posts.map((p) => (
              <li key={p.slug} style={{ marginBottom: "1rem" }}>
                <div className="project-name">
                  <Link
                    to={`/blogs/${p.slug}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {p.title}
                  </Link>
                </div>
                <div className="project-role">{p.date}</div>
                {p.description && (
                  <div className="project-desc">{p.description}</div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
