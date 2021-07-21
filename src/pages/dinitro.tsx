import { useState, useEffect } from 'react'
import NavBar from '../components/navbar'
import { motion } from 'framer-motion'
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
      <div className="section-4"></div>
      <div className="section-5"></div>
      <div className="section-6"></div>
      <div className="section-7"></div>
    </div>
  )
}

export default Dinitro
