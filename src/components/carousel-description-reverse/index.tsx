import './index.css'
import { motion, Variants, Transition } from 'framer-motion'
import ImportCarousel from '../carousel'

const CarouselDescriptionReverse = (props: {
  secOpen: boolean
  variants: Variants
  transition: Transition
  delayTransition: Transition
}) => {
  const imageUrl = [
    'images/paper.jpeg',
    'images/shing.png',
    'images/裕章工程股份有限公司.png',
    'images/西王特剛.png',
    'images/青島安泰熱力.png',
    'images/溫州宏澤熱電股份有限公司.png',
    'images/隆順綠能科技股份有限公司.png',
    'images/山東臨沂響河屯熱力電廠.png',
  ]
  const title = [
    '廣元造紙',
    '新隆纖維染整股份有限公司',
    '裕章工程股份有限公司',
    '西王特剛',
    '青島安泰熱力',
    '溫州宏澤熱電股份有限公司',
    '隆順綠能科技股份有限公司',
    '山東臨沂響河屯熱力電廠',
  ]
  return (
    <div className="carousel-description-reverse-container">
      <div className="description-container">
        <motion.div
          className="title"
          animate={props.secOpen ? 'open' : 'closed'}
          variants={props.variants}
          transition={props.transition}
        >
          合作夥伴
        </motion.div>
        <motion.div
          className="content"
          animate={props.secOpen ? 'open' : 'closed'}
          variants={props.variants}
          transition={props.delayTransition}
        >
          歐珊掌握國際上最先進的放電技術、臭氧低溫氧化脫硝處理，一直是環保技術領域的翹楚。廣元造紙
          新隆纖維染整股份有限公司、 裕章工程股份有限公司、 西王特剛、
          青島安泰熱力、 溫州宏澤熱電股份有限公司、 隆順綠能科技股份有限公司、
          山東臨沂響河屯熱力電廠
          等等實業公司，皆與歐珊建立堅實的商業合作關係。歐珊在臺灣和中國有許多的合作夥伴，以最專業的態度滿足客戶對於"環保、節能、效率"的追求。
        </motion.div>
      </div>
      <ImportCarousel image={imageUrl} title={title} />
    </div>
  )
}

export default CarouselDescriptionReverse
