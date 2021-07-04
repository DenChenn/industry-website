import ImageGallery from '../components/image_gallery'
import './landing.css'
import NavBar from '../components/navbar'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Landing = () => {
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

  return (
    <div className="landing-container">
      <div className="bg">
        <img src="images/background.jpg" alt="bg" />
      </div>
      <NavBar></NavBar>
      <div className="section-1">
        <div className="logo-container">
          <img width="100%" height="100%" src="images/logo.svg" alt="logo" />
        </div>
        <div className="content">歐珊股份有限公司</div>
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
        <ImageGallery></ImageGallery>
      </div>
    </div>
  )
}

export default Landing
