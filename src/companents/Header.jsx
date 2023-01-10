import React from 'react'
import { Fade } from 'react-reveal'
import '../assets/App.css'
import "react-lazy-load-image-component/src/effects/blur.css"
import Logo from '../assets/images/logos.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Nav from './Navs'
import Ziyotxonov from "../assets/images/ziyotxonov.png"
import Footer from './Footer'
function Header() {

    return (
        <>
            <header className='hero'>
                <Nav />
                <div className="container-fluid mx-auto">
                    <div className="row">
                        <div className="bottom text-center mx-auto mt-5">
                            <Fade top cascade >
                                <LazyLoadImage className='mx-auto' src={Logo} effect="blur" alt='error img' />

                            </Fade>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="team pb-5">
                    <div className="container mt-5 mx-auto ">
                        <div className="row mx-auto">
                            <Fade bottom cascade >
                                <h1 className='white mt-5    text-center' >Ijodkorlar</h1>

                            </Fade>

                            <div className="col-lg-4  text-center mx-auto">
                                <Fade bottom cascade>

                                    <div className="wrap text-center mx-auto pt-5">


                                        <LazyLoadImage src={Ziyotxonov} alt="erorr" effect='blur' />


                                        <h3 className='white mt-5'>Zamshidhon <br /> Ziyothonov</h3>
                                    </div>

                                </Fade>


                            </div>


                            <div className="col-lg-4  text-center mx-auto">
                                <Fade bottom cascade>

                                    <div className="wrap text-center mx-auto pt-5">


                                        <LazyLoadImage src={Ziyotxonov} alt="erorr" effect='blur' />


                                        <h3 className='white mt-5'>Zamshidhon <br /> Ziyothonov</h3>
                                    </div>

                                </Fade>


                            </div>


                            <div className="col-lg-4  text-center mx-auto">
                                <Fade bottom cascade>

                                    <div className="wrap text-center mx-auto pt-5">


                                        <LazyLoadImage src={Ziyotxonov} alt="erorr" effect='blur' />


                                        <h3 className='white mt-5'>Zamshidhon <br /> Ziyothonov</h3>
                                    </div>

                                </Fade>


                            </div>


                            <div className="col-lg-4  text-center mx-auto">
                                <Fade bottom cascade>

                                    <div className="wrap text-center mx-auto pt-5">


                                        <LazyLoadImage src={Ziyotxonov} alt="erorr" effect='blur' />


                                        <h3 className='white mt-5'>Zamshidhon <br /> Ziyothonov</h3>
                                    </div>

                                </Fade>


                            </div>


                            <div className="col-lg-4  text-center mx-auto">
                                <Fade bottom cascade>

                                    <div className="wrap text-center mx-auto pt-5">


                                        <LazyLoadImage src={Ziyotxonov} alt="erorr" effect='blur' />


                                        <h3 className='white mt-5'>Zamshidhon <br /> Ziyothonov</h3>
                                    </div>

                                </Fade>


                            </div>



                        </div>


                    </div>

                </div>

            </header >
            <hr />
            <Footer />
        </>
    )
}

export default Header
