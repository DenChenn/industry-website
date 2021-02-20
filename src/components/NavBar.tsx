import React from 'react'
import { Col, Row } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
    return (
        <div className="navbar">
            <Row className='navrow'>
                <Col xs={1}>
                    <Link to="/">
                        <img onContextMenu={(e) => e.preventDefault()} src="/images/logo.png" alt="logo" />
                    </Link>
                </Col>
                <Col xs={2} className="department">
                    <p>環保事業部</p>
                </Col>
                <Col xs={2} className="catagory"/>
                <Col xs={1} className="catagory">
                    <p>公司介紹</p>
                </Col>
                <Col xs={1} className="catagory">
                    <p>產品介紹</p>
                </Col>
                <Col xs={1} className="catagory">
                    <p>最新消息</p>
                </Col>
                <Col xs={1} className="catagory">
                    <p>影片</p>
                </Col>
                <Col xs={1} className="catagory">
                    <p>技術說明</p>
                </Col>
                <Col xs={1} className="catagory">
                    <p>聯絡我們</p>
                </Col>
                <Col xs={1} className="search">
                    <p>搜尋</p>
                </Col>
                
            </Row>
        </div>
    );
}

export default NavBar;