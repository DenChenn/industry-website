import './index.css'
import { motion, Variants, Transition } from 'framer-motion'
import ImportCarousel from '../carousel'

const CarouselDescription = (props: {
  secOpen: boolean
  variants: Variants
  transition: Transition
  delayTransition: Transition
}) => {
  const imageUrl = [
    'images/120kg臭氧發生器.jpg',
    'images/廣州南州水廠氧氣源47.5kgh臭氧產生器.jpg',
    'images/車間120KG臭氧發生器調試.jpg',
    'images/新疆阿克蘇印染污水聚集區2台45kgh臭氧發生器.jpg',
    'images/山東2台60kgh臭氧低溫脫硝系統.jpg',
    'images/2台100T鏈條爐臭氧脫硝.jpg',
    'images/河南岷山50kgh臭氧低溫脫硝.jpg',
    'images/煙臺巨力汙水處理廠臭氧項目.jpg',
  ]
  const title = [
    '120kg 臭氧發生器',
    '廣州南州水廠氧氣源 47.5kg/h 臭氧產生器',
    '車間 120KG 臭氧發生器調試',
    '新疆阿克蘇印染污水聚集區 2 台 45kg/h 臭氧發生器',
    '山東 2 台 60kg/h 臭氧低溫脫硝系統',
    '2 台 100T 鏈條爐臭氧脫硝(2×120kg/h)',
    '河南岷山 50kg/h 臭氧低溫脫硝',
    '煙臺巨力汙水處理廠臭氧項目',
  ]

  return (
    <div className="carousel-description-container">
      <div className="description-container">
        <motion.div
          className="title"
          animate={props.secOpen ? 'open' : 'closed'}
          variants={props.variants}
          transition={props.transition}
        >
          工程實績
        </motion.div>
        <motion.div
          className="content"
          animate={props.secOpen ? 'open' : 'closed'}
          variants={props.variants}
          transition={props.delayTransition}
        >
          歐珊致力於提供優秀且耐用的臭氧脫硝設備，在各個行業皆有其應用之領域。
          無論是工業、汙水處理、生技，我們都竭盡所能地為客戶提供最經濟、最完備
          的工業設備，是許多公司最信賴的合作對象。
        </motion.div>
      </div>
      <ImportCarousel image={imageUrl} title={title} />
    </div>
  )
}

export default CarouselDescription
