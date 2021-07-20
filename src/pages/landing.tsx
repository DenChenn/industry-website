import ImageGallery from '../components/image_gallery'
import './landing.css'
import NavBar from '../components/navbar'
import { motion } from 'framer-motion'
import { useEffect, useState, useRef, useLayoutEffect } from 'react'
import GridNav from '../components/grid_nav'
import ImportCarousel from '../components/carousel'
import Footer from '../components/footer'
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

  const intro =
    '歐珊，始終堅持研發技術的創新與進步，本著“共享科技、體驗完美、貴於品質、恆於服務”的宗旨。為客戶提供最經濟、最完備的工業技術。為了系統的安全穩定，歐珊在既有工業技術上增加了各項設備保護，讓系統在自動化運行的情況下，將故障事故最小化。不只如此，系統也記錄了歷史資料記錄。幫助客戶掌握所有系統的時序資料，供日後分析以及系統優化。'

  const [sec2Open, setSec2Open] = useState(false)
  const [sec3Open, setSec3Open] = useState(false)
  const [sec4Open, setSec4Open] = useState(false)
  const sec2Ref = useRef<HTMLDivElement>(null)
  const sec3Ref = useRef<HTMLDivElement>(null)
  const sec4Ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const sec2TopPos = sec2Ref.current?.getBoundingClientRect().top
    const sec3TopPos = sec3Ref.current?.getBoundingClientRect().top
    const sec4TopPos = sec4Ref.current?.getBoundingClientRect().top

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      console.log(scrollPosition)

      if (sec2Ref != null) {
        if (sec2TopPos && sec2TopPos < scrollPosition) {
          setSec2Open(true)
        }
      }
      if (sec3Ref != null) {
        if (sec3TopPos && sec3TopPos < scrollPosition) {
          setSec3Open(true)
        }
      }
      if (sec4Ref != null) {
        if (sec4TopPos && sec4TopPos < scrollPosition) {
          setSec4Open(true)
        }
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const sectionVariant = {
    open: {
      opacity: 1,
      transform: 'translateY(0%)',
    },
    closed: {
      opacity: 0,
      transform: 'translateY(50%)',
    },
  }

  const sectionTransition = {
    duration: 0.5,
  }

  const sectionDelayTransition = {
    duration: 0.5,
    delay: 0.3,
  }

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
      <div className="section-2" ref={sec2Ref}>
        <motion.div
          className="title"
          animate={sec2Open ? 'open' : 'closed'}
          variants={sectionVariant}
          transition={sectionTransition}
        >
          <p>公司理念</p>
        </motion.div>
        <motion.div
          className="content"
          animate={sec2Open ? 'open' : 'closed'}
          variants={sectionVariant}
          transition={sectionDelayTransition}
        >
          <p>{intro}</p>
        </motion.div>
        <ImageGallery></ImageGallery>
      </div>
      <div className="section-3" ref={sec3Ref}>
        <div className="description-container">
          <motion.div
            className="title"
            animate={sec3Open ? 'open' : 'closed'}
            variants={sectionVariant}
            transition={sectionTransition}
          >
            合作夥伴
          </motion.div>
          <motion.div
            className="content"
            animate={sec3Open ? 'open' : 'closed'}
            variants={sectionVariant}
            transition={sectionDelayTransition}
          >
            歐珊在中國的山東、江蘇、甘肅、浙江省皆有合作夥伴，以最專業的態度滿足客戶對於"環保、節能、效率"的追求。國舜西王特鋼的燒結機臭氧脫硝是山東首例，在江蘇鎮的江宏順熱電廠臭氧脫硝是江蘇首例、在甘肅慶陽的臭氧低溫脫硝是甘肅首例，在中國巨石集團的臭氧低溫脫硝不僅是浙江更是玻纖行業首例!歐珊掌握國際上最先進的放電技術、臭氧低溫氧化脫硝處理，一直走在環保與品質的最前端。
          </motion.div>
        </div>
        <ImportCarousel />
      </div>
      <div className="section-4" ref={sec4Ref}>
        <motion.div
          className="title"
          animate={sec4Open ? 'open' : 'closed'}
          variants={sectionVariant}
          transition={sectionTransition}
        >
          <div className="large">產品優點</div>
        </motion.div>
        <GridNav></GridNav>
      </div>
      <div className="section-5">
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Landing
