import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './posts.css'

import postService from '../services/post'
import Post from './Post'

// static colors for posts
const randomColors = ['#fc8282', '#8282f3', '#68f168', 'silver', 'violet', 'gold', 'pink', 'gray', 'cyan', 'rgb(22,33,44)']

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // fetch data from api
    postService.getAll().then(result => setPosts(result))
  }, [])

  return (
    <div className='post'>
      {
        posts.map((post, i) =>
          <Post backColor={randomColors[i]} key={post.id} post={post} />
        )
      }
    </div>
  )
}

export default Posts