import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home({ posts }) {
  return (
    <main className='posts-list'>
        {posts.map(post => (
            <div className="post-card" key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <Link to={`/post/${post.id}`}>Читать дальше...</Link>
            </div>
        ))
        }
    </main>
  )
}

export default Home
