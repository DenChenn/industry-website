import './grid_ele.css'
import { Link } from 'react-router-dom'

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
      <Link className="content" to="/advantage">
        <div className="title">
          <p>{props.contentTitle}</p>
          <img src="images/right.svg" alt="svg-icon" />
        </div>
        <div className="detail">{props.contentDetail}</div>
      </Link>
    </div>
  )
}

export default GridEle
