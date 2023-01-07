import React from 'react'
import { Fade } from 'react-reveal'
import './assets/App.css'
import "react-lazy-load-image-component/src/effects/blur.css"
import Logo from './assets/images/logos.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Nav from './companents/Navs'
function App() {

  return (
    <>
      <header className='hero'>
            <Nav />
            <div className="container-fluid mx-auto">
              <div className="row">
                <div className="bottom text-center mx-auto mt-5">
                  <LazyLoadImage className='mx-auto'  src={Logo} effect="blur" alt='error img'   />
                </div>
              </div>
            </div>
      </header>
    </>
  )
}

export default App
