import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function PostPage({posts, deletePost, updatePosts}) {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === Number(id));

  useEffect(() => {
    if (!post) {
      navigate(-1);
    }
  }, [post, navigate]);

  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [editTags, setEditTags] = useState("");

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
      setEditTags(post.tags ? `#${post.tags.join(" #")}` : "");
    }
  }, [post]);

  const handleSave = () =>{
    const updatedPosts = {...post, title: editTitle, body: editBody, tags: [...(editTags.trim().split('#').filter((elem) => elem.length !== 0))]};
    updatePosts(updatedPosts)
    setIsEditing(false)
  }

  if (!post) {
    return null; 
  }

  return (
    <div className="post-card">
      {isEditing?(
      <>
      <textarea name="text" className="textarea-field" value={editTitle} onChange={(e) => setEditTitle(e.target.value)}></textarea>
      <textarea name="text" className="textarea-field" value={editBody} onChange={(e) => setEditBody(e.target.value)}></textarea>
      <input type="text" className="input-field" value={editTags} onChange={(e) => setEditTags(e.target.value)}/>
      <button className="submit-button" onClick={handleSave}>Сохранить изменения</button>
      </>):(
      <>
        <h2 className="cart-title">{post.title}</h2>
        <p className="cart-descr">{post.body}</p>
        {post.tags && post.tags.map((tag, index) => <p key={index}>{"#" + tag}</p>)}
        <div className="buttons-container">
          <button className="button secondary" onClick={() => navigate(-1)}>Назад</button>
          <button className="button secondary" onClick={()=>{ deletePost(+id) }}>Удалить пост</button>
          <button className="button secondary" onClick={()=>{ setIsEditing(prev => !prev) }}>Редактировать пост</button>
        </div>
      </>)}
    </div>
  );
}

export default PostPage;
