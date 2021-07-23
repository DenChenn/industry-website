import './index.css'

const DemoBar = (props: {
  icon: Array<string>
  topic: Array<string>
  content: Array<string>
}) => {
  return (
    <div className="demo-bar-container">
      <div className="col">
        <div className="icon">
          <img src={props.icon[0]} alt="#" />
        </div>
        <div className="topic">{props.topic[0]}</div>
        <div className="content">{props.content[0]}</div>
      </div>
      <div className="col">
        <div className="icon">
          <img src={props.icon[1]} alt="#" />
        </div>
        <div className="topic">{props.topic[1]}</div>
        <div className="content">{props.content[1]}</div>
      </div>
      <div className="col">
        <div className="icon">
          <img src={props.icon[2]} alt="#" />
        </div>
        <div className="topic">{props.topic[2]}</div>
        <div className="content">{props.content[2]}</div>
      </div>
    </div>
  )
}

export default DemoBar
