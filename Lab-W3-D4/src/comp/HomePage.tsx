import React from 'react'
import Blog from './Blog'
import Blog2 from './Blog2'
import Blog3 from './Blog3'
import Blog4 from './Blog4'
import Footer from './Footer'
import Home from './Home'

function HomePage() {
  return (
    <div>
          <Home/>
      <Blog/>
      <Blog2/>
      <Blog3/>
      <Blog4/>
      <Footer/>
    </div>
  )
}

export default HomePage