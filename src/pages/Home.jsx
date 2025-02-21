import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function Home({ posts }) {
  return (
    <main className='posts-list'>
        {posts.map((post, index) => (
            <NavLink to={`/post/${post.id}`} className="post-card" key={`post-${index}`}> 
            {/* Не использую id, который дан в API, так как он не уникальный */}
              <h2 className="cart-title">{post.title}</h2>
              <p className="cart-descr">{post.body}</p>
            </NavLink>
        ))
        }
    </main>
  )
}

export default Home
