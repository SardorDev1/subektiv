import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import '../assets/App.css'
import Logo from "../assets/images/logo.jpg"
import "react-lazy-load-image-component/src/effects/blur.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
export default function Navs() {


    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container mx-auto ">
                  <div className="brand">
                    <LazyLoadImage src={Logo} effect="blur" alt='error-logo'    />
         
            
                  </div>
                    <button class="navbar-toggler toggle_nav" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <FontAwesomeIcon className='icon_bar' icon={faBars}/>
                    </button>
                    <div class="collapse end navbar-collapse" id="navbarSupportedContent">
                       
                        <ul class="navbars">
                            <li >
                                <a class=" white" href="#">Home</a>
                            </li>
                            <li >
                                <a class=" white" href="#">Link</a>
                            </li>
                            <li >
                                <a class=" white" href="#"  >
                                    Dropdown
                                </a>
                               </li>
                            <li >
                                <a class="  white">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>)
}
