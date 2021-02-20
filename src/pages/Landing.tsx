import React from 'react'
import Background from '../components/Background'
import Content from '../components/Content'
import NavBar from '../components/NavBar'
import '../styles/Landing.css'

const Landing = () => {
    return (
        <div> 
            <div className="landing">
                <NavBar/>
                <Content/>
            </div>
        </div>
    )
}

export default Landing;