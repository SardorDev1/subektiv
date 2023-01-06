import React from 'react'
import { Fade } from 'react-reveal'
import './assets/App.css'
import "react-lazy-load-image-component/src/effects/blur.css"
import  Logo from './assets/images/logo.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
function App() {

  return (
    <>
     <Fade bottom >
     <LazyLoadImage src={Logo} effect='blur' alt="error" />
     </Fade>
      <Fade bottom cascade >
        <h1>Salom Dunyo Men Tugildim!!!</h1>
      </Fade>
    </>
  )
}

export default App
