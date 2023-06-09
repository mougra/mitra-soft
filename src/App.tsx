import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Posts from './pages/Posts'
import DetailsUser from './pages/DetailsUser'
import NotFound from './pages/NotFound'
import AboutMe from './pages/AboutMe'

function App() {
  return (
    <>
      <Routes>
        <Route path='/mitra-soft' element={<Posts />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/detail-user/:id' element={<DetailsUser />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
