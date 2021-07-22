import { useState, useEffect } from 'react'
import NavBar from '../components/navbar'
import { motion } from 'framer-motion'
import LeftImage from '../components/left_image'
import RightImage from '../components/right_image'
import Footer from '../components/footer'
import './dinitro.css'

const Dinitro = () => {
  const [isOpen, setOpen] = useState(false)

  const pointVariant = {
    open: {
      opacity: 1,
      pathLength: 1,
    },
    closed: {
      opacity: 0,
      pathLength: 0,
    },
  }

  const pointTransition = {
    duration: 2,
    delay: 0.5,
    repeat: Infinity,
  }

  useEffect(() => {
    setOpen(true)
  }, [])

  const section4Title = '這個是標題'
  const section4Content = '這個是內容容容容容JFODIJSDOFIJSDOFIJSDFOISDJ'
  const section5Title = '這個是標題'
  const section5Content = '這個是內容容容容容JFODIJSDOFIJSDOFIJSDFOISDJ'
  const section6Title = '這個是標題'
  const section6Content = '這個是內容容容容容JFODIJSDOFIJSDOFIJSDFOISDJ'

  return (
    <div className="dinitro-container">
      <div className="bg">
        <img src="images/dinitro_bg.jpg" alt="bg" />
      </div>
      <NavBar></NavBar>
      <div className="section-1">
        <div className="logo-container">
          <img width="100%" height="100%" src="images/dinitro.svg" alt="logo" />
        </div>
        <div className="content">低溫臭氧脫硝工業系統</div>
        <div className="explore-icon">
          <svg width="100%" height="100%" viewBox="0 0 110 59" fill="none">
            <motion.path
              d="M4 4L55 55L106 4"
              animate={isOpen ? 'open' : 'closed'}
              variants={pointVariant}
              transition={pointTransition}
            />
          </svg>
        </div>
      </div>

      <div className="section-2">
        <div className="title">這個是標題</div>
        <div className="content">
          GGGGDOIFJSODFJSODFJOSDIFJOSDIFJOSDIFJSODIFJSDOIF
        </div>
      </div>
      <div className="section-3">
        <div className="title">這個是標題這個是標題這個是標題</div>
      </div>
      <div className="section-4">
        <LeftImage
          imageUrl="images/oror.jpg"
          title={section4Title}
          content={section4Content}
        ></LeftImage>
      </div>
      <div className="section-5">
        <RightImage
          imageUrl="images/oror.jpg"
          title={section5Title}
          content={section5Content}
        ></RightImage>
      </div>
      <div className="section-6">
        <LeftImage
          imageUrl="images/oror.jpg"
          title={section6Title}
          content={section6Content}
        ></LeftImage>
      </div>
      <div className="section-7">
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Dinitro
