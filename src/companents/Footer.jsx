import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Brand from "../assets/images/logos.png"
import "react-lazy-load-image-component/src/effects/blur.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Fade } from 'react-reveal'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
export default function Footer() {
    return (
        <div>
            <footer>
                <div className="container mx-auto">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="left m-5">
                                <Fade left cascade >
                                    <LazyLoadImage className='footer_brand' src={Brand} effect="blur" alt='error' />

                                </Fade>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 end">
                            <div className="right m-5 ">
                                <Fade right cascade >
                                    <h2 className='white' >Biz bilan Aloqa</h2>

                                </Fade>
                                <div className="d-flex ">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faYoutube} />
                                        <FontAwesomeIcon icon={faFacebook} />
                                        <FontAwesomeIcon icon={faInstagram} />
                                        <FontAwesomeIcon icon={faTelegram} />


                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
