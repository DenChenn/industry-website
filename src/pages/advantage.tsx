import './advantage.css'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import NavBar from '../components/navbar'
import DemoBar from '../components/demo_bar'
import Footer from '../components/footer'
import Paragraph from '../components/paragraph'

const Advantage = () => {
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

  const section2Title = '我們的堅持'
  const section2Content =
    '歐珊始終堅持研發技術的創新與進步。客戶的都是我們竭盡全力為客戶做到最極致的產品使用體驗。在歐珊經濟且完備的工業技術下，產品有許多優點想讓您知道。這些優點將在未來長期的使用下，幫助您建立高效、經濟、穩定的作業流程。歐珊期待能和客戶有更緊密的聯繫以及更良善的合作關係。'

  const firstRowIcon: Array<string> = [
    'images/leaf.svg',
    'images/ban.svg',
    'images/chemical.svg',
  ]

  const firstRowTopic: Array<string> = [
    '不受排氣種類影響',
    '反應選擇性高',
    '多種污染物同步脫除',
  ]

  const firstRowContent: Array<string> = [
    '可以是鍋爐煙道排氣、垃圾焚燒煙道排氣、水泥窯爐、玻璃窯爐、燒結機等各種煙道排氣，只要有<200℃以下的煙道排氣條件和一定的停留時間即可完成脫硝。廠房相容性高，在各種工業環境下皆有良好的發揮。未來在工廠另作規畫時，也可適用於新的設備。不僅增加了產品的保值性，更減少了儀器重購所需花費。對於有長久規畫的廠房絕對是不二之選。',
    '臭氧對 NOx 反應選擇性高，無需對煙道排氣加熱即可反應。鑒於煙道排氣中具有多種物質，利用臭氧對 NOx 反應選擇性使氮氧化物得以優先反應。減少了篩選氣體和無用的氧化消耗，省時更省成本！',
    '實現 NOx、SO 2 、Hg 等污染物的氧化吸收，真正實現“一塔多脫”。在氧化氮氧化物之後，臭氧可以繼續氧化 SO 2 、Hg等污染物，並利用 BELCO® EDV® Wet Scrubbing System 進行排除。無須購置其他脫除污染的設備，真正實現“一塔多脫”。節能且環保的工業技術，一直是歐珊所堅持的理念。',
  ]

  const secondRowIcon: Array<string> = [
    'images/fire.svg',
    'images/fluid.svg',
    'images/glass.svg',
  ]

  const secondRowTopic: Array<string> = ['脫除效率高', '迅速反應', '尾氣檢測']

  const secondRowContent: Array<string> = [
    '可以達到 98%以上的脫硝率。根據本廠的實測，在固定溫度之下，選用高分子低溫脫硝系統後排氣的氮氧化物數值降低了約 98%之多！高效的表現，絕對讓客戶滿意。',
    '臭氧與污染物皆接觸面積大、反應迅速。歐珊使用 BELCO®EDV®濕式脫硝洗脫技術。EDV® 濕式使用大小固定的水滴來獲得有效氣體接觸。簡單的旋風分離法可輕鬆去除任何氣體中的多餘水分。滴灌、噴嘴和液滴分離器是開放式的，非常耐用，連續運行多年不停機。',
    '測尾氣源的化學組成及流量，保持操作性能的一致。藉由控制系統檢測煙道排氣，根據不同比例的汙染物調整參數。以維持最佳的化學反應的比例，減少不必要的資源浪費更減少了系統的消耗。讓系統始終保持高效穩定，也減少人員疏失的可能性。',
  ]

  const thirdRowIcon: Array<string> = [
    'images/iron.svg',
    'images/nono.svg',
    'images/power.svg',
  ]

  const thirdRowTopic: Array<string> = [
    '電能消耗低',
    '對原鍋爐影響小',
    '鑑往知來',
  ]

  const thirdRowContent: Array<string> = [
    '臭氧發生系統僅需對部分空氣或氧氣進行放電，即可以完成臭氧生成。EFFIZON® HP 電極的每個電極由高壓電極、不銹鋼網和電介質玻璃管組成放置在接地管內。臭氧在內部和外部的玻璃間隙中產生。能源使用效率極高。',
    '僅在鍋爐尾部煙道進行臭氧噴嘴的布置，所需安裝均為額外配件。在不影響原設備的裝置下，以’’加裝’’的方式為您的系統減少汙染源的排放。未來在工廠另作規畫時，可分離設備另做組裝，且廠房的高相容性更確保了產品的續用。節省了對於原鍋爐的改裝成本，維持了原器材的產能。歐珊始終考量客戶的使用便利。',
    '統的脫硝工業技術，如選擇性催化還原工業技術（SCR：Selective Catalytic Reduction）和選擇性非催化還原工業技術（SNCR）等，存在氨逃逸的問題（氨濃度越高、分壓越大，消耗的臭氧量就越多，間接增加了臭氧的消耗量），且必須在特定的溫度範圍內操作；氧化脫硝不需要輸入額外的熱量，流程更簡潔，成本更低。',
  ]

  return (
    <div className="advantage-container">
      <div className="bg">
        <img src="images/advantage.jpg" alt="bg" />
      </div>
      <NavBar></NavBar>

      <div className="section-1">
        <div className="logo-container">
          <img width="100%" height="100%" src="images/logo.svg" alt="logo" />
        </div>
        <div className="content">歐珊公司設備九大優點</div>
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
        <div className="title">創新堅持、造就不凡</div>
      </div>

      <div className="section-4">
        <DemoBar
          icon={firstRowIcon}
          topic={firstRowTopic}
          content={firstRowContent}
        ></DemoBar>
      </div>
      <div className="section-5">
        <DemoBar
          icon={secondRowIcon}
          topic={secondRowTopic}
          content={secondRowContent}
        ></DemoBar>
      </div>
      <div className="section-6">
        <DemoBar
          icon={thirdRowIcon}
          topic={thirdRowTopic}
          content={thirdRowContent}
        ></DemoBar>
      </div>
      <div className="section-7">
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Advantage
