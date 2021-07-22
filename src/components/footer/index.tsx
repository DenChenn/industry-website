import './index.css'

const Footer = () => {
  const summary =
    '歐珊多年的開發經驗和尖端技術，掌握國際上最先進的放電技術、臭氧低溫氧 化脫硝處理、汙水處理(高濃度有機廢水降解(COD、BOD)、泳池水臭氧消毒)。 在環保工業技術基礎上，建立最經濟、效率最大化的產品設計。提供客戶最安 全、環保、效率、自動化的生產線設計。在業界評價良好，是許多公司最信賴 的合作對象。'

  return (
    <div className="footer-container">
      <div className="left">
        <div className="title">公司簡介</div>
        <div className="content">{summary}</div>
      </div>
      <div className="right">
        <div className="title">聯絡資訊</div>
        <div className="feed">
          <div className="topic">公司名稱</div>
          <div className="detail">歐珊股份有限公司</div>
        </div>
        <div className="feed">
          <div className="topic">聯絡電話</div>
          <div className="detail">033333333</div>
        </div>
        <div className="feed">
          <div className="topic">公司地址</div>
          <div className="detail">地址000000000</div>
        </div>
        <div className="feed">
          <div className="topic">email</div>
          <div className="detail">ddddddddddddd</div>
        </div>
        <div className="feed">
          <div className="topic">傳真電話</div>
          <div className="detail">kkkkkkkkkkkkkk</div>
        </div>
      </div>
    </div>
  )
}

export default Footer