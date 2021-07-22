import './index.css'
import { Link } from 'react-router-dom'

const ScaleList = (props: {
  title1: string
  title2: string
  title3: string
  title4: string
  title5: string
}) => {
  return (
    <div className="scale-list-container">
      <Link to="/" className="row">
        <div className="title">{props.title1}</div>
        <div className="arrow">
          <img src="images/right.svg" alt="#" />
        </div>
      </Link>
      <Link to="/" className="row">
        <div className="title">{props.title2}</div>
        <div className="arrow">
          <img src="images/right.svg" alt="#" />
        </div>
      </Link>
      <Link to="/" className="row">
        <div className="title">{props.title3}</div>
        <div className="arrow">
          <img src="images/right.svg" alt="#" />
        </div>
      </Link>
      <Link to="/" className="row">
        <div className="title">{props.title4}</div>
        <div className="arrow">
          <img src="images/right.svg" alt="#" />
        </div>
      </Link>
      <Link to="/" className="row">
        <div className="title">{props.title5}</div>
        <div className="arrow">
          <img src="images/right.svg" alt="#" />
        </div>
      </Link>
    </div>
  )
}

export default ScaleList
