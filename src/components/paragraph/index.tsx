import './index.css'

const Paragraph = (props: { title: string; content: string }) => {
  return (
    <div className="paragraph-container">
      <div className="title">{props.title}</div>
      <div className="content">{props.content}</div>
    </div>
  )
}

export default Paragraph
