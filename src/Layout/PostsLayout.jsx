import React from 'react'
import { Outlet } from 'react-router'
import Post from '../components/Post'

const PostsLayout = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default PostsLayout