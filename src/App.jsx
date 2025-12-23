import { useState } from 'react'
import NavigationBar from './components/NavigationBar'
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router'
import HomePage, {homeLoader} from './pages/HomePage'
import RootLayout from './Layout/RootLayout'
import Contacts from './pages/Contacts'
import NotFoundPage from './pages/NotFoundPage'
import Post, { postLoader } from './components/Post'
import PostsLayout from './Layout/PostsLayout'
import PostDetails, { postDetailLoader } from "./pages/PostDetails";
import Login from './pages/Login'
import Register from './pages/Register'
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} loader={homeLoader}/>
        <Route path="about" element={<Contacts />} />
        <Route path="login" element={<Login/>}/>
        <Route path="registration" element={<Register/>}/>
        <Route path="posts" element={<PostsLayout />}>
          <Route index element={<Post />} loader={postLoader} />
          <Route
            path=":id"
            element={<PostDetails />}
            loader={postDetailLoader}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  
  return (
    <>    
      <RouterProvider router={router}/>
    </>
  )
}

export default App
