import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import '../assets/App.css'
import Logo from "../assets/images/logo.jpg"
import "react-lazy-load-image-component/src/effects/blur.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fade } from 'react-reveal'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
export default function Navs() {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container mx-auto ">
                    <div className="brand">
                        <Fade left >
                        <LazyLoadImage src={Logo} effect="blur" alt='error-logo' />

                        </Fade>

                    </div>

                    <button class="navbar-toggler toggle_nav" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<Fade right cascade >
<FontAwesomeIcon className='icon_bar' icon={faBars} />

</Fade>
                    </button>
                    <div class="collapse end_nav navbar-collapse" id="navbarSupportedContent">
                  
                        <ul class="navbars">
                        <Fade right >
                                <li >

                                    <Link class=" white" to={"/"} >Home</Link>
                                </li>




                                <li >

                                    <Link class=" white" to={"/statistika"} >
                                        Statistika
                                    </Link>

                                </li>
                                <li >

                                    <Link class="  white" to={"/hizmatlar"} >
                                        Hizmatlar
                                    </Link>

                                </li>
                                <li >

                                    <Link class="  white" to={"/contents"} >
                                        Contentlar
                                    </Link>

                                </li>
                                </Fade>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>)
}
