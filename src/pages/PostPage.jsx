import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function PostPage({ posts }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === Number(id));
    console.log(post)
  if (!post) {
    return <h2>Пост не найден</h2>;
  }

  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {post.tags && post.tags.map((tag, index) => <p key={index}>{tag}</p>)}
      <button onClick={() => navigate(-1)}>← Назад</button>
    </div>
  );
}

export default PostPage;
