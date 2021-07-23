import './index.css'
import { useState, useRef, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'

const DemoBar = (props: {
  icon: Array<string>
  topic: Array<string>
  content: Array<string>
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

  const transition = {
    duration: 0.5,
  }

  const delayTransition = {
    duration: 0.5,
    delay: 0.3,
  }

  const delayDelayTransition = {
    duration: 0.5,
    delay: 0.6,
  }

  return (
    <div className="demo-bar-container" ref={refer}>
      <motion.div
        className="col"
        animate={isOpen ? 'open' : 'closed'}
        variants={variant}
        transition={transition}
      >
        <div className="icon">
          <img src={props.icon[0]} alt="#" />
        </div>
        <div className="topic">{props.topic[0]}</div>
        <div className="content">{props.content[0]}</div>
      </motion.div>
      <motion.div
        className="col"
        animate={isOpen ? 'open' : 'closed'}
        variants={variant}
        transition={delayTransition}
      >
        <div className="icon">
          <img src={props.icon[1]} alt="#" />
        </div>
        <div className="topic">{props.topic[1]}</div>
        <div className="content">{props.content[1]}</div>
      </motion.div>
      <motion.div
        className="col"
        animate={isOpen ? 'open' : 'closed'}
        variants={variant}
        transition={delayDelayTransition}
      >
        <div className="icon">
          <img src={props.icon[2]} alt="#" />
        </div>
        <div className="topic">{props.topic[2]}</div>
        <div className="content">{props.content[2]}</div>
      </motion.div>
    </div>
  )
}

export default DemoBar
