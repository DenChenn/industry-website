import { Col, Row } from 'react-flexbox-grid'
import './index.css'

const ImageGallery = () => {
  return (
    <Row className="image-gallery">
      <Col xs={6} md={3} className="container">
        <div className="image-box">
          <img src="/images/oror.jpg" alt="" />
          <div className="title">
            <div className="text">ORANGE</div>
          </div>
        </div>
        <div className="information">
          <p>這邊有更多的文字說明</p>
          <div className="text">learn more</div>
        </div>
      </Col>
      <Col xs={6} md={3} className="container">
        <div className="image-box">
          <img src="/images/oror.jpg" alt="" />
          <div className="title">
            <div className="text">ORANGE</div>
          </div>
        </div>
        <div className="information">
          <p>這邊有更多的文字說明</p>
          <div className="text">learn more</div>
        </div>
      </Col>
      <Col xs={6} md={3} className="container">
        <div className="image-box">
          <img src="/images/oror.jpg" alt="" />
          <div className="title">
            <div className="text">ORANGE</div>
          </div>
        </div>
        <div className="information">
          <p>這邊有更多的文字說明</p>
          <div className="text">learn more</div>
        </div>
      </Col>
      <Col xs={6} md={3} className="container">
        <div className="image-box">
          <img src="/images/oror.jpg" alt="" />
          <div className="title">
            <div className="text">ORANGE</div>
          </div>
        </div>
        <div className="information">
          <p>這邊有更多的文字說明</p>
          <div className="text">learn more</div>
        </div>
      </Col>
    </Row>
  )
}

export default ImageGallery
