import './index.css'

const RightImage = (props: {
  imageUrl: string
  title: string
  content: string
}) => {
  return (
    <div className="right-image-container">
      <div className="left">
        <div className="title">{props.title}</div>
        <div className="content">{props.content}</div>
      </div>
      <div className="right">
        <img width="100%" height="100%" src={props.imageUrl} alt="#" />
      </div>
    </div>
  )
}

export default RightImage
