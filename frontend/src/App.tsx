import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { Publish } from './pages/Publish'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/blog/:id' element={<Blog/>}/>
        <Route path='/publish' element = {<Publish/>}/>
        <Route path='/' element={<Navigate replace to="/signin" />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
