import { useState, useRef, useLayoutEffect } from 'react'
import './index.css'
import { motion } from 'framer-motion'

const Paragraph = (props: { title: string; content: string }) => {
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

  return (
    <div className="paragraph-container" ref={refer}>
      <motion.div
        className="title"
        animate={isOpen ? 'open' : 'closed'}
        variants={variant}
        transition={transition}
      >
        {props.title}
      </motion.div>
      <motion.div
        className="content"
        animate={isOpen ? 'open' : 'closed'}
        variants={variant}
        transition={delayTransition}
      >
        {props.content}
      </motion.div>
    </div>
  )
}

export default Paragraph
