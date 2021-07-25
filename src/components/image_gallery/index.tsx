import './index.css'
import { Link } from 'react-router-dom'

const ImageGallery = () => {
  return (
    <div className="image-gallery-container">
      <div className="container">
        <div className="image-box">
          <img src="/images/01.png" alt="" />
          <div className="title">歐珊濕式脫硝洗脫技術</div>
        </div>
        <div className="information">
          <p>
            歐珊久經各種不同適性廠房的考驗，適用於控制廠房廢氣排放。在
            多年的營運中，歐珊濕式洗滌系統無需停機或排放調整即可穩定運行。
            EDV®濕洗脫系統在全球範歐珊用於控制來自 FCCU、煉油廠焚化爐、燃燒的
            氣體排放加熱器、鍋爐和其他工業應用的煙道。
          </p>
          <Link className="text" to="/dinitro">
            瞭解更多
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="image-box">
          <img src="/images/02.png" alt="" />
          <div className="title">歐珊低溫氧化工業技術</div>
        </div>
        <div className="information">
          <p>
            歐珊低溫氧化工業技術中，NOx
            被臭氧氧化形成高價化合物，可以很容易地和顆粒、SOx
            從煙道排氣中透過液氣接觸去除。
          </p>
          <Link className="text" to="/dinitro">
            瞭解更多
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="image-box">
          <img src="/images/03.png" alt="" />
          <div className="title">歐珊 PDO/PDA 臭氧產生器</div>
        </div>
        <div className="information">
          <p>
            歐珊 PDO/PDA
            主張其高運行效率可靠性、“即插即用”系統(完全儀表化)、操作簡單、堅固的設計可在惡劣的環境條件下運行、低維護成本，都是重視效率的客戶的不二之選
          </p>
          <Link className="text" to="/generator">
            瞭解更多
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="image-box">
          <img src="/images/04.png" alt="" />
          <div className="title">歐珊電極技術</div>
        </div>
        <div className="information">
          <p>
            採用最新的歐珊電極科技，降低能源成本、減少機器所佔用空間、以及簡單的介面供歐珊臭氧系統操作員使用。
            我們的每個電極由高壓電極、不銹鋼網和電介質玻璃管組成放置在接地管內，臭氧在內部和外部的玻璃間隙中產生。
          </p>
          <Link className="text" to="/generator">
            瞭解更多
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ImageGallery
