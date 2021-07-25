import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './index.css'

const ImportCarousel = () => {
  return (
    <div className="c-container">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img src="images/bon.jpeg" alt="#" />
        </div>
        <div>
          <img src="images/der.jpg" alt="#" />
        </div>
        <div>
          <img src="images/huan.png" alt="#" />
        </div>
        <div>
          <img src="images/toon.jpeg" alt="#" />
        </div>
        <div>
          <img src="images/paper.jpeg" alt="#" />
        </div>
      </Carousel>
    </div>
  )
}

export default ImportCarousel
