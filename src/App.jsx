import { useState, useEffect } from 'react'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import PostPage from './pages/PostPage'
import CreatePost from './pages/CreatePost'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Login from './pages/Login';
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("newPost")) || [];
    
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts([...storedPosts, ...data.posts]))
      .catch((error) => console.error("Ошибка:", error));
  }, []);

  const deletePost = (id) =>{ 
    setPosts(prev => {
      const updatedPosts = prev.filter((post) => post.id !== id);
      localStorage.setItem("newPost", JSON.stringify(updatedPosts));
      return updatedPosts;
    });
  }

  const addPost = (newPost) => {
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem("newPost", JSON.stringify(updatedPosts));
  };

  const updatePosts = (updatedPost) => {
    setPosts(prev => {
      const updatedPosts = prev.map((post) => 
        post.id === updatedPost.id ? updatedPost : post
      );
      localStorage.setItem("newPost", JSON.stringify(updatedPosts));
      return updatedPosts;
    });
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/post/:id" element={<PostPage posts={posts} deletePost={deletePost} updatePosts = {updatePosts} />} />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreatePost addPost={addPost} />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}


export default App
