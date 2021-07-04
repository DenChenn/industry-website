import { motion } from 'framer-motion'
import './menuToggle.css'

const variantTop = {
  closed: { d: 'M 2 2.5 L 20 2.5', stroke: 'hsl(0, 0%, 100%)' },
  open: { d: 'M 3 16.5 L 17 2.5', stroke: 'hsl(0, 0%, 70%)' },
}

const variantMiddle = {
  closed: { opacity: 1 },
  open: { opacity: 0 },
}

const variantButtom = {
  closed: { d: 'M 2 16.346 L 20 16.346', stroke: 'hsl(0, 0%, 100%)' },
  open: { d: 'M 3 2.5 L 17 16.346', stroke: 'hsl(0, 0%, 70%)' },
}

const transition = { duration: 0.3 }

const MenuToggle = (props: { toggle: () => void; isOpen: Boolean }) => {
  return (
    <div className="Button" onClick={props.toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          fill="transparent"
          strokeLinecap="round"
          strokeWidth="3"
          animate={props.isOpen ? 'open' : 'closed'}
          initial={false}
          variants={variantTop}
          transition={transition}
        />
        <motion.path
          fill="transparent"
          strokeLinecap="round"
          strokeWidth="3"
          d="M 2 9.423 L 20 9.423"
          stroke="hsl(0, 0%, 100%)"
          animate={props.isOpen ? 'open' : 'closed'}
          initial={false}
          variants={variantMiddle}
          transition={transition}
        />
        <motion.path
          fill="transparent"
          strokeLinecap="round"
          strokeWidth="3"
          animate={props.isOpen ? 'open' : 'closed'}
          initial={false}
          variants={variantButtom}
          transition={transition}
        />
      </svg>
    </div>
  )
}

export default MenuToggle
