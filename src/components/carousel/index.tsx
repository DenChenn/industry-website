import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './index.css'
import { Link } from 'react-router-dom'

const ImportCarousel = (props: {
  image: Array<string>
  title: Array<string>
}) => {
  return (
    <div className="c-container">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img src={props.image[0]} alt="#" />
          <Link
            to="/achievement"
            style={{ textDecoration: 'none', color: '#ffffff' }}
          >
            <p className="legend">{props.title[0]}</p>
          </Link>
        </div>
        <div>
          <img src={props.image[1]} alt="#" />
          <Link
            to="/achievement"
            style={{ textDecoration: 'none', color: '#ffffff' }}
          >
            <p className="legend">{props.title[1]}</p>
          </Link>
        </div>
        <div>
          <img src={props.image[2]} alt="#" />
          <Link
            to="/achievement"
            style={{ textDecoration: 'none', color: '#ffffff' }}
          >
            <p className="legend">{props.title[2]}</p>
          </Link>
        </div>
        <div>
          <img src={props.image[3]} alt="#" />
          <Link
            to="/achievement"
            style={{ textDecoration: 'none', color: '#ffffff' }}
          >
            <p className="legend">{props.title[3]}</p>
          </Link>
        </div>
        <div>
          <img src={props.image[4]} alt="#" />
          <Link
            to="/achievement"
            style={{ textDecoration: 'none', color: '#ffffff' }}
          >
            <p className="legend">{props.title[4]}</p>
          </Link>
        </div>
        <div>
          <img src={props.image[5]} alt="#" />
          <Link
            to="/achievement"
            style={{ textDecoration: 'none', color: '#ffffff' }}
          >
            <p className="legend">{props.title[5]}</p>
          </Link>
        </div>
        <div>
          <img src={props.image[6]} alt="#" />
          <Link
            to="/achievement"
            style={{ textDecoration: 'none', color: '#ffffff' }}
          >
            <p className="legend">{props.title[6]}</p>
          </Link>
        </div>
        <div>
          <img src={props.image[7]} alt="#" />
          <Link
            to="/achievement"
            style={{ textDecoration: 'none', color: '#ffffff' }}
          >
            <p className="legend">{props.title[7]}</p>
          </Link>
        </div>
      </Carousel>
    </div>
  )
}

export default ImportCarousel
