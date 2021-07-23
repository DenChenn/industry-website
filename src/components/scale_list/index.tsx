import './index.css'
import { Link } from 'react-router-dom'
import { useState, useRef, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'

const ScaleList = (props: {
  title1: string
  title2: string
  title3: string
  title4: string
  title5: string
}) => {
  const [isOpen, setOpen] = useState(false)
  const refer = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const topPos = refer.current?.getBoundingClientRect().top

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight

      if (refer != null) {
        if (topPos && topPos < scrollPosition) {
          setOpen(true)
        }
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const variant = {
    open: {
      opacity: 1,
      transform: 'translateY(0%)',
    },
    closed: {
      opacity: 0,
      transform: 'translateY(50%)',
    },
  }
  const innerVariant = {
    open: {
      opacity: 1,
      transform: 'translateX(0%)',
    },
    closed: {
      opacity: 0,
      transform: 'translateX(-20%)',
    },
  }

  const transition = {
    duration: 0.3,
  }

  const transition1 = {
    duration: 0.3,
    delay: 0.2,
  }

  const transition2 = {
    duration: 0.3,
    delay: 0.4,
  }

  const transition3 = {
    duration: 0.3,
    delay: 0.6,
  }
  const transition4 = {
    duration: 0.3,
    delay: 0.8,
  }
  const transition5 = {
    duration: 0.3,
    delay: 1.0,
  }

  return (
    <motion.div
      className="scale-list-container"
      ref={refer}
      animate={isOpen ? 'open' : 'closed'}
      variants={variant}
      transition={transition}
    >
      <motion.div
        className="row"
        animate={isOpen ? 'open' : 'closed'}
        variants={innerVariant}
        transition={transition1}
      >
        <Link to="/concept" className="row-inner">
          <div className="title">{props.title1}</div>
          <div className="arrow">
            <img src="images/right.svg" alt="#" />
          </div>
        </Link>
      </motion.div>
      <motion.div
        className="row"
        animate={isOpen ? 'open' : 'closed'}
        variants={innerVariant}
        transition={transition2}
      >
        <Link to="/concept" className="row-inner">
          <div className="title">{props.title2}</div>
          <div className="arrow">
            <img src="images/right.svg" alt="#" />
          </div>
        </Link>
      </motion.div>
      <motion.div
        className="row"
        animate={isOpen ? 'open' : 'closed'}
        variants={innerVariant}
        transition={transition3}
      >
        <Link to="/concept" className="row-inner">
          <div className="title">{props.title3}</div>
          <div className="arrow">
            <img src="images/right.svg" alt="#" />
          </div>
        </Link>
      </motion.div>
      <motion.div
        className="row"
        animate={isOpen ? 'open' : 'closed'}
        variants={innerVariant}
        transition={transition4}
      >
        <Link to="/concept" className="row-inner">
          <div className="title">{props.title4}</div>
          <div className="arrow">
            <img src="images/right.svg" alt="#" />
          </div>
        </Link>
      </motion.div>
      <motion.div
        className="row"
        animate={isOpen ? 'open' : 'closed'}
        variants={innerVariant}
        transition={transition5}
      >
        <Link to="/concept" className="row-inner">
          <div className="title">{props.title5}</div>
          <div className="arrow">
            <img src="images/right.svg" alt="#" />
          </div>
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default ScaleList
