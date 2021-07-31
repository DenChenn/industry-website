import Texty from 'rc-texty'
import './index.css'

const TextAnimation = (props: { title: string }) => {
  return (
    <div className="text-animation-container">
      <Texty>{props.title}</Texty>
    </div>
  )
}

export default TextAnimation
