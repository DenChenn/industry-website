import React from 'react'
import { Col, Row } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import "../styles/Background.css";
import NavBar from './NavBar';
import Content from './Content'

const Background = () => {
    return (
        <div>
            <div className="background" />
            <NavBar/>
            <Content/>
        </div>
    );
}

export default Background;