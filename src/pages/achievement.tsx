import { useState, useEffect } from 'react'
import NavBar from '../components/navbar'
import { motion } from 'framer-motion'
import LeftImage from '../components/left_image'
import RightImage from '../components/right_image'
import Footer from '../components/footer'
import Paragraph from '../components/paragraph'
import './achievement.css'
import TextAnimation from '../components/text-animation'

const Achievement = () => {
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

  const sectionTitle = [
    '大量的實體建設',
    '120kg 臭氧發生器',
    '廣州南州水廠氧氣源47.5kg/h臭氧產生器',
    '車間 120KG 臭氧發生器調試',
    '新疆阿克蘇印染污水聚集區2台45kg/h臭氧發生器',
    '山東 2 台 60kg/h 臭氧低溫脫硝系統',
    '2 台 100T 鏈條爐臭氧脫硝',
    '河南岷山 50kg/h 臭氧低溫脫硝',
    '煙臺巨力汙水處理廠臭氧項目',
  ]

  const sectionContent = [
    '歐珊致力於提供優秀且耐用的臭氧脫硝設備，在各個行業皆有其應用之領域。無論是工業、汙水處理、生技，我們都竭盡所能地為客戶提供最經濟、最完備的工業設備，是許多公司最信賴的合作對象。',
    '採用先進的高硼矽放電管技術，具有優化的機械設計和先進的 IGBT 供電單元。 污染和能源損耗低，結實耐用且產生之臭氧濃度高。臭氧發生器安放於地或固定在架子上，因此很容易的檢查和維修。臭氧產生器設計使其可 24 小時連續工 作，每一台預先安裝好了相關的儀錶和閥門。臭氧發生器是完全一體化安裝的，出廠前已將管道，閥門、儀錶和電纜安裝在發生器上，而且全套系統在出廠前已完成了全部測試。',
    '在臭氧產生的流程中，部分不能生產臭氧的能量轉化為熱能釋放，必須通過冷卻水腔流過足夠流量的冷卻水帶走。臭氧發生器運行在 7000V 電壓和 800Hz 頻率條件下。該參數的選擇不僅僅是為了提供優化的條件高效發生臭氧，而且是基於安全可靠的工業設計原理。7000V 的放電電壓大大減少了電力衝擊，保證了放電體的使用壽命更長。',
    '氣源入口和分佈室;高壓分配:安裝在氣源入口分佈室，為臭氧發生單元提供電能;發生器罐體:臭氧放電體安裝在其中;臭氧出口收集室;冷卻水腔:在發生器罐體和通過兩端已焊接的密封的不銹鋼管隔離，作為冷卻水腔;冷卻輸入口和出口管道;放電體:安裝在不銹鋼管內;罐體:作為接地電極;',
    '以歐珊產生之臭氧處理印染廢水，結果發現臭氧對含有 GBC 棗紅基染料的印染 廢水的色度和 CODcr 去除率分別達 94%和 72%，產出水之 pH 值趨於中性。煉油廠廢水中的汙物多為石油裂解產物和烷烴類的衍生產物。此類物質可生化能力極弱，對此特點，這類廢水的常規處理法多為“隔油+氣浮+生化”。目前已有學者採用臭氧深度處理該廢水，以實現廢水的迴圈使用。對於 COD 值小於 1000mg/L、酚含量小於 500mg/L 的焦化廢水，經臭氧技術處理後水質明顯得到改善。COD去除率高達 80%，酚的去除率在 80%以上，硫氰化物或氰化物的去除率接近 100%,氨氮的去除率在 35%左右。',
    '歐珊應用於山東齊成石化脫硫脫硝項目的合計 60KG 氧氣源高濃度臭氧發生器製造檢驗完畢順利發貨。本組臭氧發生器系統應用於煙道排氣之脫硫脫硝。這象徵著歐珊成為國內第 三家可獨立生產製造 30kg/h 以上臭氧產量、完全擁有自主產權的企業。近年來，隨著中國工業經濟的迅速發展，能源消費的增長，伴隨而來的是氮氧化物排放量的急速上升。氮氧 化物是工業廢氣中主要的大氣污染物之一。它對環境的損害嚴重，不僅會破壞大氣層，並可能引致光化學煙霧、酸霧和酸霧等問題;同時，氮氧化物對人體健康也有較大危害，可引發支氣管炎、肺氣腫甚至是肺癌等病變。',
    '本項目採用國際先進的低溫脫硝技術，它利用臭氧的強氧化性，將不溶於水的氮氧化物氧化為溶於水的五氧化二氮(N2O5)，然後再由水性洗滌劑或乾式洗滌塔的吸收劑吸收，從而使工業廢氣中的氮氧化物排放濃度達到可行水準，滿足國家或地方空氣品質控制要求。低溫脫硝技術廣泛應用於石化、冶金、水泥、醫藥、電力等行業的煙道尾氣脫硝，並已在中國的多家石化企業實現了成功的應用。實務證明，低溫脫硝技術可以清除天然氣、燃料油和煤之燃燒設備所產生之氮氧化物，去除率達到 95%以上。在主要脫硝的同時，它還能不同程度地脫硫及去除汞等重金屬;並且性能穩定可靠，不會出現催化劑中毒現象。',
    '歐珊採用的臭氧處理技術可以作為獨立式處理系統，處理中等濃度的氮氧化物;也可以與改進型燃燒設備結合使用。我們也可提供基於低溫脫硝技術的全套設備，包括臭氧發生器、線上氣體分析儀及儀錶控制閥組。其中，模組化臭氧和氧氣供應系統可以快捷地與客戶現有的空氣污染物控制設備進行整合，而無需進行重大設備改造或增設其它設備;小型模組化設備布局非常靈活，可以滿足不同應用領域和行業的獨特空間要求。這些都大幅增強了低溫脫硝技術的靈活性、行業適應性和實用性。',
    '歐珊應用於煙臺巨力化工的高濃度氧氣源臭氧發生器現已安裝調試完畢，交付客戶使用。三套臭氧設備主要應用於汙水處理工藝中，對調節 COD 及提升水的生物降解性具有顯著效益。設備完全達到客戶要求，並順利通過驗收。隨著歐珊大型臭氧設備客戶的不斷增加，公司產品也在不斷生產及市場考驗中日臻完善，滿足各行各業需求。',
  ]

  const sectionImage = [
    'images/120kg臭氧發生器.jpg',
    'images/廣州南州水廠氧氣源47.5kgh臭氧產生器.jpg',
    'images/車間120KG臭氧發生器調試.jpg',
    'images/新疆阿克蘇印染污水聚集區2台45kgh臭氧發生器.jpg',
    'images/山東2台60kgh臭氧低溫脫硝系統.jpg',
    'images/2台100T鏈條爐臭氧脫硝.jpg',
    'images/河南岷山50kgh臭氧低溫脫硝.jpg',
    'images/煙臺巨力汙水處理廠臭氧項目.jpg',
  ]

  return (
    <div className="achievement-container">
      <div className="bg">
        <img src="images/achievement_bg.jpeg" alt="bg" />
      </div>
      <NavBar></NavBar>
      <div className="section-1">
        <div className="logo-container">
          <img width="100%" height="100%" src="images/logo.svg" alt="logo" />
        </div>
        <div className="content">
          <TextAnimation title="歐珊公司工程實績展示"></TextAnimation>
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
        <Paragraph
          title={sectionTitle[0]}
          content={sectionContent[0]}
        ></Paragraph>
      </div>
      <div className="section-3">
        <div className="title">工程實績展示</div>
      </div>
      <div className="section-4">
        <LeftImage
          imageUrl={sectionImage[0]}
          title={sectionTitle[1]}
          content={sectionContent[1]}
        ></LeftImage>
      </div>
      <div className="section-image">
        <RightImage
          imageUrl={sectionImage[1]}
          title={sectionTitle[2]}
          content={sectionContent[2]}
        ></RightImage>
      </div>
      <div className="section-image">
        <LeftImage
          imageUrl={sectionImage[2]}
          title={sectionTitle[3]}
          content={sectionContent[3]}
        ></LeftImage>
      </div>
      <div className="section-image">
        <RightImage
          imageUrl={sectionImage[3]}
          title={sectionTitle[4]}
          content={sectionContent[4]}
        ></RightImage>
      </div>
      <div className="section-image">
        <LeftImage
          imageUrl={sectionImage[4]}
          title={sectionTitle[5]}
          content={sectionContent[5]}
        ></LeftImage>
      </div>
      <div className="section-image">
        <RightImage
          imageUrl={sectionImage[5]}
          title={sectionTitle[6]}
          content={sectionContent[6]}
        ></RightImage>
      </div>
      <div className="section-image">
        <LeftImage
          imageUrl={sectionImage[6]}
          title={sectionTitle[7]}
          content={sectionContent[7]}
        ></LeftImage>
      </div>
      <div className="section-image">
        <RightImage
          imageUrl={sectionImage[7]}
          title={sectionTitle[8]}
          content={sectionContent[8]}
        ></RightImage>
      </div>
      <div className="section-12">
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Achievement
