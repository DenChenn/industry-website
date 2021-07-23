import './concept.css'
import NavBar from '../components/navbar'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Footer from '../components/footer'

const Concept = () => {
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

  const section2Title = '氮化物（NOX）介紹'
  const section2Content =
    '當燃料燃燒過程中釋放出氮時，它會與氧原子結合生成一氧化氮（NO）。這進一步與氧氣結合產生二氧化氮（NO2 ）。在正常環境濃度下，一氧化氮不被認為對健康有害，但二氧化氮（NO 2 ）是一種刺激性氣體，高濃度時會導致氣道發炎。二氧化氮和一氧化氮統稱為氮氧化物（NOx）。NOx 氣體反應形成煙霧和酸雨，並且是形成 PM 和地面臭氧（NO2 + hv(λ 波長需小於 420nm) → NO + O (O為高能氧原子)，此高能氧原子會再與 O2 反應生成 O3。）的主要原因，這兩種氣體都會對健康產生不利影響。'
  const section3Title = '臭氧（O3）介紹'
  const section3Content =
    '臭氧是一種強氧化劑（遠比氧分子強），具有許多與氧化相關工業應用。被用於半導體工業和其他工業領域的水處理、消毒、脫色、除臭等領域。與其他化學品相比，使用臭氧的優勢在於：1.強大的氧化能力 2.處理後僅留下氧氣 3.發電能力臭氧由於反應活性高、半衰期短，只能在使用前以氧氣或空氣產生。產生原理為臭氧發生器內部的兩個電極之間(不導電的電介質（例如玻璃）相互隔離)施加高壓。它們之間通過的一些氧分子（O 2 ）在電場中分解為兩個單獨的氧原子。這些原子立即將自身附著到最近的氧分子上, 從而形成臭氧。臭氧的氧化能力極強，臭氧的氧化還原電位勝過氧化氫、過錳酸鉀等，僅次於氟。'
  const section4Title = '氧化低溫脫硝（Denitrification）介紹'
  const section4Content =
    '利用 O 3 的強氧化性，將煙道排氣中占 95%以上的難溶於水 NO 氧化為易溶於水、且與鹼液反應的高價 NOx（NO2 、NO3 、N2O3 、N2O5 ）。隨煙道排氣進入後續脫硫系統，在脫硫塔內與 SO2 一同被鹼液吸收；最後生成的硝酸鹽進入後處理系統即完成處理。本項目在集塵器出口(洗滌塔入口)設置多點逆流煙道布氣裝置，用臭氧將煙道排氣中不溶于水的 NO 氧化成易被鹼溶液吸收的高價態氮氧化物，隨後煙道排氣進入洗滌塔，完成脫硫、脫硝、吸收等過程。'

  return (
    <div className="concept-container">
      <div className="bg">
        <img src="images/concept_bg.jpg" alt="bg" />
      </div>
      <NavBar></NavBar>
      <div className="section-1">
        <div className="logo-container">
          <img width="100%" height="100%" src="images/concept.svg" alt="logo" />
        </div>
        <div className="content">工業技術原理說明</div>
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
        <div className="title">{section2Title}</div>
        <div className="content">{section2Content}</div>
      </div>
      <div className="section-2">
        <div className="title">{section3Title}</div>
        <div className="content">{section3Content}</div>
      </div>
      <div className="section-2">
        <div className="title">{section4Title}</div>
        <div className="content">{section4Content}</div>
      </div>
      <div className="section-5">
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Concept
