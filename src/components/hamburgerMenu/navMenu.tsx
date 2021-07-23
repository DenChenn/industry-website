import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import React from 'react'
import './navMenu.css'

const variants = {
  show: {
    transform: 'translateX(0em)',
    opacity: 1,
  },
  hide: {
    transform: 'translateX(5em)',
    opacity: 0,
  },
}

const NavMenu = (props: { isOpen: Boolean }) => {
  return (
    <div className="NavMenuContainer">
      <div className="NavList">
        <motion.li
          className="NavLink"
          initial={false}
          animate={props.isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.3, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.05, duration: 0.05 },
            },
          }}
        >
          <Link to="/">首頁</Link>
        </motion.li>
        <motion.li
          className="NavLink"
          initial={false}
          animate={props.isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.4, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.1, duration: 0.05 },
            },
          }}
        >
          <Link to="/dinitro">脫硝系統</Link>
        </motion.li>
        <motion.li
          className="NavLink"
          initial={false}
          animate={props.isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
        >
          <Link to="/generator">臭氧產生器</Link>
        </motion.li>
        <motion.li
          className="NavLink"
          initial={false}
          animate={props.isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.6, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.2, duration: 0.05 },
            },
          }}
        >
          <Link to="/small-match">原理說明</Link>
        </motion.li>
        <motion.li
          className="NavLink"
          initial={false}
          animate={props.isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.7, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.25, duration: 0.05 },
            },
          }}
        >
          <Link to="/advantage">九大優點</Link>
        </motion.li>
      </div>
    </div>
  )
}

export default NavMenu
