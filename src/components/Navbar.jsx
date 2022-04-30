import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

const linkStyle = {
  textDecoration: 'none',
  color: 'white'
}

const backStyle = {
  backgroundColor: 'rgb(85, 197, 188)'
}

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" style={backStyle}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <NavLink to='/' style={linkStyle}>Social App</NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar