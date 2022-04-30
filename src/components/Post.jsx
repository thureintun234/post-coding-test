import React from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import './post.css'
import { useNavigate } from 'react-router-dom'

const Post = ({ post, backColor }) => {
  const navigate = useNavigate()

  const goToDetail = () => {
    navigate(`/${post.id}`)
  }

  const backStyle = {
    backgroundColor: backColor,
    color: 'white'
  }
  return (
    <div className='post-item'>
      <Card sx={{ maxWidth: 345 }} style={backStyle}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {post.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={goToDetail} size="small" style={{ color: 'white' }}>Details</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Post