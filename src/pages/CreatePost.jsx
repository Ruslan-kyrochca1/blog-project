import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CreatePost({ addPost }) {
    const navigate = useNavigate()
    const [tags, setTags] = useState("")
    const [text, setText] = useState("")
    const [title, setTitle] = useState("")



    const handleSubmit = (event) => {
        event.preventDefault();
        
        
        const newPost = {
            id: Date.now(),
            title,
            body: text,
            tags: [...(tags.trim().split('#').filter((elem) => elem.length !== 0))],
            userId: 5,
        }
        
        addPost(newPost);
        setText("");
        setTitle("");
        navigate("/")
    }

  return (
    <form onSubmit={handleSubmit} className="form-container">
        <textarea 
            name="text" 
            className="textarea-field"
            placeholder="Заголовок"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <textarea 
            name="text"
            className="textarea-field"
            placeholder="Основной текст поста"
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <input 
            type="text" 
            className="input-field"
            placeholder="Введите теги через #"
            value = {tags}
            onChange={(e)=> setTags(e.target.value)}
        />
        <button type="submit" className="submit-button">Отправить</button>
    </form>
  )
}

export default CreatePost
