import './generator.css'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import NavBar from '../components/navbar'
import LeftImage from '../components/left_image'
import RightImage from '../components/right_image'
import ScaleList from '../components/scale_list'
import Footer from '../components/footer'
import Paragraph from '../components/paragraph'
import TextAnimation from '../components/text-animation'

const Generator = () => {
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

  const section2Title = '歐珊的臭氧技術'
  const section2Content =
    '歐珊電極技術和變頻電源，讓 PDO/PDA 生產器相比其他生產器出類拔萃。良好的控電技術是可靠的臭氧發生器的基礎，因為其將能源用在刀口上，使得效率、精簡、生產靈活性皆無與倫比，最大限度地減少了空間要求和相關的設施建設成本。'
  const section4Title = '歐珊 PDO/PDA 臭氧產生器'
  const section4Content =
    '歐珊PDO/PDA系列臭氧發生器無疑是全球需要可靠、高效地生產大量臭氧設計工程師和用戶的最佳選擇。因為 PDO/PDA 系列發生器具有最精簡、最可靠的、最具成本效益的工業技術設計。更甚者其高運行效率、穩定性、“即插即用”系統(完全儀表化)、操作簡單、堅固的設計(允許在惡劣環境條件下運行)、低維護成本，都是重視效率的客戶的不二之選'
  const section6Title = '歐珊電極技術:'
  const section6Content =
    '採用最新歐珊電極科技。降低能源成本，減少機器所佔用空間、以及簡單的介面供歐珊臭氧系統操作員使用。歐珊電極技術精要在於:臭氧發生器容器內部，不銹鋼鋼管焊接在兩個固管板之間，作為接地電極。我們的每個電極由高壓電極、不銹鋼網和電介質玻璃管組成放置在接地管內。臭氧在內部和外部的玻璃間隙中產生。'
  const section7Title = '變頻電源裝置(PSU)'
  const section7Content =
    '任何臭氧發生器的性能不僅取決於在電極組件上，且最佳電源利用效率的電池亦舉足輕重。在非常廣泛的調節比率範圍下(高達 100:1)，歐珊PSU通過使用頻率來調節臭氧集中度和生產能力，展現精確且線性的臭氧輸出控制。 PSU 設計與可變電壓相比，電壓在整個範圍內保持恆定。因此，歐珊的變頻 PSU 保持了非常高且穩定的輸出功率。'

  return (
    <div className="generator-container">
      <div className="bg">
        <img src="images/generator.jpg" alt="bg" />
      </div>
      <NavBar></NavBar>
      <div className="section-1">
        <div className="logo-container">
          <img width="100%" height="100%" src="images/logo.svg" alt="logo" />
        </div>
        <div className="content">
          <TextAnimation title="工業級臭氧產生系統"></TextAnimation>
        </div>
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
        <Paragraph title={section2Title} content={section2Content}></Paragraph>
      </div>
      <div className="section-3">
        <div className="title">臭氧系統介紹</div>
      </div>
      <div className="section-4">
        <LeftImage
          imageUrl="images/ozone_generate.gif"
          title={section4Title}
          content={section4Content}
        ></LeftImage>
      </div>
      <div className="section-5">
        <div className="title">原理簡介</div>
        <div className="scale-list-outer">
          <ScaleList
            title1="O3 ENV® 氧分子電場分解技術說明"
            title2="O3 ENV® 臭氧之強氧化能力技術說明"
            title3="O3 ENV® 莫爾比脫硝效率技術說明"
            title4="O3 ENV® 臭氧之良好反應選擇性技術說明"
            title5="O3 ENV® 臭氧的應用領域說明"
          ></ScaleList>
        </div>
      </div>
      <div className="section-6">
        <RightImage
          imageUrl="images/effizon.png"
          title={section6Title}
          content={section6Content}
        ></RightImage>
      </div>
      <div className="section-7">
        <LeftImage
          imageUrl="images/psu.jpg"
          title={section7Title}
          content={section7Content}
        ></LeftImage>
      </div>
      <div className="section-8">
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Generator
