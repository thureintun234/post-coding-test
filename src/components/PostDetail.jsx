import { Grid, Typography, Button } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import postService from '../services/post'

import './postDetail.css'

const PostDetail = () => {
  const [posts, setPosts] = useState([])
  const { postId } = useParams()
  const post = posts.find(p => p.id === Number(postId))
  const navigate = useNavigate()

  const backToPosts = () => {
    navigate('/')
  }

  useEffect(() => {
    // fetch data from api
    postService.getAll().then(result => setPosts(result))
  }, [])

  return (
    <div className='detail-container'>
      <Grid container spacing={2} >
        <Grid item xs={8} className='detail-main'>
          {
            post ? (
              <div>
                <Typography variant="h6">Name: <strong>{post.name}</strong></Typography>
                <Typography variant="h6">Email: <strong>{post.email}</strong></Typography>
                <Typography variant="h6">City: <strong>{post.address.city}</strong></Typography>
                <Typography variant="h6">Phone: <strong>{post.phone}</strong></Typography>
                <Typography variant="h6">Website: <a href={post.website} target="_blank" rel="noreferrer">{post.website}</a></Typography>
                <Typography variant="h6">Company: <strong>{post.company.name}</strong></Typography>

                <Button variant='contained' onClick={backToPosts}>back To Posts</Button>
              </div>
            ) : <p>Loading...</p>
          }
        </Grid>
      </Grid>
    </div>
  )
}

export default PostDetail