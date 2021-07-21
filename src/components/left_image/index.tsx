import './index.css'

const LeftImage = (props: { imageUrl: string }) => {
  return (
    <div className="left-image-container">
      <div className="left">
        <div className="title"></div>
        <div className="content"></div>
      </div>
      <div className="right">
        <img src={props.imageUrl} alt="#" />
      </div>
    </div>
  )
}

export default LeftImage
