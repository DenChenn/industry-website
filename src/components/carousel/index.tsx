import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './index.css'

const ImportCarousel = () => {
  return (
    <div className="c-container">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img height="auto" src="images/s1.jpg" alt="#" />
          <p className="legend">甘肅慶陽</p>
        </div>
        <div>
          <img height="auto" src="images/s2.jpg" alt="#" />
          <p className="legend">江蘇鎮江宏順熱電廠</p>
        </div>
        <div>
          <img height="auto" src="images/s4.jpg" alt="#" />
          <p className="legend">中國巨石集團</p>
        </div>
      </Carousel>
    </div>
  )
}

export default ImportCarousel
