import './index.css'

const ImageGallery = () => {
  return (
    <div className="image-gallery-container">
      <div className="container">
        <div className="image-box">
          <img src="/images/01.png" alt="" />
          <div className="title">BELCO® EDV®濕式脫硝洗脫技術</div>
        </div>
        <div className="information">
          <p>
            噴嘴和低壓滴罐使用大小固定的水滴來獲得有效氣體接觸。
            簡單的旋風分離法可輕鬆去除任何氣體中的多餘水分。滴灌、噴嘴和液滴分離器
            是開放式的，非常耐用，連續運行多年不停機。
          </p>
          <div className="text">瞭解更多</div>
        </div>
      </div>
      <div className="container">
        <div className="image-box">
          <img src="/images/02.png" alt="" />
          <div className="title">Linde's LoTOxTM工業技術</div>
        </div>
        <div className="information">
          <p>
            NOx 被 臭氧氧化形成高價化合物，可以很容易地和顆粒、SOx
            從煙道排氣中透過液氣 接觸去除。以噴嘴將熱煙道排氣驟冷至飽
            和，並將其注入 EDV®的反應區。在此反應區以多點逆流式佈氣系統注入臭氧
            (O3)。而臭氧選擇性地氧化 NOX 成 N2O5。當氧化飽和後，N2O5 和水蒸氣
            結合形成硝酸。離開反應區之後，剩餘的氣體以
            吸收器噴霧和過濾模組洗脫。
          </p>
          <div className="text">瞭解更多</div>
        </div>
      </div>
      <div className="container">
        <div className="image-box">
          <img src="/images/03.png" alt="" />
          <div className="title">WEDECO PDO/PDA 臭氧產生器</div>
        </div>
        <div className="information">
          <p>
            WEDECO PDO/PDA 系列臭氧發生器無疑是全球，需要可靠、高效地生產大量
            臭氧設計工程師和用戶的最終選擇。因為 PDO/PDA 系列發生器具有結果是最
            精簡、最可靠的、最具成本效益的工業技術設計。更甚者其高運行效率、“即插即用”系統(完全儀表化)、操作簡單、堅固的設計可在惡劣的環境條
            件下運行、低維護成本，都是重視效率的客戶的不二之選
          </p>
          <div className="text">learn more</div>
        </div>
      </div>
      <div className="container">
        <div className="image-box">
          <img src="/images/04.png" alt="" />
          <div className="title">EFFIZON® HP 電極技術</div>
        </div>
        <div className="information">
          <p>
            採用最新 EFFIZON® HP 科技。降低能源成本，減少機器所佔
            用空間、以及簡單的介面供 WEDECO 臭氧系統操作員使用。EFFIZON® HP
            電極的每個電極由高壓電極、不銹鋼網和電介質玻璃管組成放置在接地管內。臭氧在內部和外部的玻璃
            間隙中產生。
          </p>
          <div className="text">learn more</div>
        </div>
      </div>
    </div>
  )
}

export default ImageGallery
