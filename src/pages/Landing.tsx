import React from 'react'
import { Col, Row } from "react-flexbox-grid";
import Content from '../components/Content'
import NavBar from '../components/NavBar'
import ImageGallery from '../components/ImageGallery'
import '../styles/Landing.css'

const Landing = () => {
    return (
        <div> 
            <div className="landing" style={{backgroundImage: "url(/images/background.jpg)"}}>
                <div className="cover">
                    <NavBar/>
                    <Content/>
                </div>
            </div>
            <div>
                <ImageGallery />
            </div>
        </div>
    )
}

export default Landing;