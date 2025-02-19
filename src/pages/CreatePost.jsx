import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CreatePost({ addPost }) {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [text, setText] = useState("")
    const [title, setTitle] = useState("")



    const handleSubmit = (event) => {
        event.preventDefault();
        
        
        const newPost = {
            id: Date.now(),
            title,
            body: text,
            tags: [],
            userId: 5,
        }
        
        addPost(newPost);
        setText("");
        setTitle("");
        navigate("/")
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Ваше имя"
            value = {username}
            onChange={(e)=> setUsername(e.target.value)}
        />
        <textarea 
            name="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <textarea 
            name="text" 
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Отправить</button>
    </form>
  )
}

export default CreatePost
