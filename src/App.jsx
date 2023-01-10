
import React, { useEffect, useState, useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './companents/Header'
import Loader from './companents/Loader'

function App() {

  const [loader, setLoader] = useState(true)




  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 500)
  }, [])



  if (loader === true) {
    return <Loader />
  } else {
    return (

      <>



        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/statistics' element={<Header />} />
          <Route path='/services' element={<Header />} />
          <Route path='/contents' element={<Header />} />
        </Routes>

      </>
    )
  }

}

export default App
