import './index.css'
import { useState, useRef, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'

const RightImage = (props: {
  imageUrl: string
  title: string
  content: string
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

  const imageTransition = {
    duration: 0.5,
    delay: 0.6,
  }

  return (
    <div className="right-image-container" ref={refer}>
      <div className="left">
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
      <motion.div
        className="right"
        animate={isOpen ? 'open' : 'closed'}
        variants={variant}
        transition={imageTransition}
      >
        <img width="100%" height="100%" src={props.imageUrl} alt="#" />
      </motion.div>
    </div>
  )
}

export default RightImage
