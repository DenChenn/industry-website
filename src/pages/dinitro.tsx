import { useState, useEffect } from 'react'
import NavBar from '../components/navbar'
import { motion } from 'framer-motion'
import LeftImage from '../components/left_image'
import RightImage from '../components/right_image'
import Footer from '../components/footer'
import Paragraph from '../components/paragraph'
import './dinitro.css'
import TextAnimation from '../components/text-animation'

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

  const section2Title = '自動化的系統'
  const section2Content =
    '臭氧低溫氧化脫硝系統中設計有一鍵啟動模式。只需要遠方啟動信號，系統即進入全自控狀態。根據負載情況自動調整輸出量、濃度、流量、設備功耗等，讓系統始終處於最優運行狀態。不僅大幅降低人力管理成本，對於生產線的整合、監控、優化、管理等層面，都有莫大的助益。'
  const section4Title = '歐珊濕式脫硝洗滌技術'
  const section4Content =
    '歐珊久經各種不同適性廠房的考驗，適用於控制廠房廢氣排放。在多年的營運中，歐珊濕式洗滌系統無需停機或排放調整即可穩定運行。歐珊濕洗滌系統在全球中，用於控制來自 FCCU、 煉油廠焚化爐、燃燒的氣體排放加熱器、鍋爐和其他工業應用的煙道。濕式洗滌 使用液體與煙道排氣接觸來去除酸性氣體、顆粒物和其他污染物。專有技術和性能水平的提高讓歐珊Wet Scrubbing從眾多競爭者脫穎而出'
  const section5Title = '傳統脫硝技術和我們的差異'
  const section5Content =
    '傳統濕式洗滌工業技術在液氣接觸時需要產生精細(Fine)煙霧，以提高收集性能。也正是此”精細” 煙霧的產生和收集，導致傳統濕式洗滌法的不穩定。必須使用高效除霧器收集含 有污染物(非精細)的霧氣。固體和金屬鹽類會在除霧器表面快速積聚，導致堵塞 和維護問題。相較之下，歐珊濕式洗滌系統避免形成任何霧氣，意味著沒有除霧器問題。噴嘴和低壓滴罐使用大小固定的水滴來獲得有效氣體接觸。簡單的旋風分 離法可輕鬆去除任何氣體中的多餘水分。滴罐、噴嘴和液滴分離器是開放式的， 非常耐用，連續運行多年不停機。'
  const section6Title = '歐珊低溫氧化運作流程'
  const section6Content =
    '為了控制 NOx 排放，歐珊濕式洗滌技術使用 Linde 集團的低溫氧化工業技術。在歐珊低溫氧化工業技術中，NOx 被臭氧氧化形成高價化合物，可以很容易地和顆粒、SOx 從煙道排氣中透過液氣接觸去除。過程非常適合 FCCU 應用的需求。以噴嘴將熱煙道排氣驟冷至飽和，並將其注入歐珊濕式洗滌系統的反應區。在此反應區以多點逆流式佈氣系統注入臭氧（O3）。而臭氧選擇性地氧化 NOX成 N2O5。當氧化飽和後，N2O5 和水蒸氣結合形成硝酸。離開反應區之後，剩餘的氣體（包括 SO2 的吸收和顆粒物）以吸收器噴霧和過濾模組洗滌。歐珊低溫氧化技術除了可以有效處理範圍廣泛的氮氧化物和有害污染物、也可與各種空氣污染控制（APC）設備結合使用、而且能夠滿足不斷變化的 NOx 排放相關法規。不僅如此，歐珊低溫氧化技術無需修改現有的燃燒設備或將煙道排氣重新加熱至高溫。且相比於傳統減排過程，無須儲存所需的危險化學品亦為其優勢所在）'

  return (
    <div className="dinitro-container">
      <div className="bg">
        <img src="images/dinitro_bg.jpg" alt="bg" />
      </div>
      <NavBar></NavBar>
      <div className="section-1">
        <div className="logo-container">
          <img width="100%" height="100%" src="images/logo.svg" alt="logo" />
        </div>
        <div className="content">
          <TextAnimation title="低溫臭氧脫銷工業系統"></TextAnimation>
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
        <div className="title">脫硝系統介紹</div>
      </div>
      <div className="section-4">
        <LeftImage
          imageUrl="images/belco_edv.png"
          title={section4Title}
          content={section4Content}
        ></LeftImage>
      </div>
      <div className="section-5">
        <RightImage
          imageUrl="images/traditional.png"
          title={section5Title}
          content={section5Content}
        ></RightImage>
      </div>
      <div className="section-6">
        <LeftImage
          imageUrl="images/lotox.png"
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
