import './grid_ele.css'

const GridEle = (props: {
  svgLink: string
  contentTitle: string
  contentDetail: string
}) => {
  return (
    <div className="grid-ele-container">
      <div className="icon">
        <img src={props.svgLink} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <p>{props.contentTitle}</p>
          <img src={props.svgLink} alt="svg-icon" />
        </div>
        <div className="detail">{props.contentDetail}</div>
      </div>
    </div>
  )
}

export default GridEle
