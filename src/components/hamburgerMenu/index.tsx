import { useState } from 'react'
import './index.css'
import { motion } from 'framer-motion'
import MenuToggle from './menuToggle'
import NavMenu from './navMenu'

const HamburgerMenu = () => {
  const menuVariants = {
    open: {
      transform: 'translateX(3%)',
    },
    closed: {
      transform: 'translateX(103%)',
    },
  }

  const menuTransition = {
    type: 'spring',
    duration: 1,
    stiffness: 33,
    delay: 0.1,
  }

  const [isOpen, setOpen] = useState(false)

  const ToggleMenu = () => {
    setOpen(!isOpen)
  }

  return (
    <div className="HamburgerMenuContainer">
      <MenuToggle toggle={ToggleMenu} isOpen={isOpen}></MenuToggle>
      <motion.div
        className="MenuContainer"
        initial={false}
        transition={menuTransition}
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
      >
        <NavMenu isOpen={isOpen}></NavMenu>
      </motion.div>
    </div>
  )
}

export default HamburgerMenu
