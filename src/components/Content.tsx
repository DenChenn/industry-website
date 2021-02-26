import React from 'react'
import { Col, Row } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import "../styles/Content.css";

const Content = () => {
    return (
        <Row className="content">
            <img src="/images/ozone.svg" alt="ozone"/>
            <p>
                臭氧脫硝設備
            </p>
        </Row>
    );
}

export default Content;