import './index.css'
import GridEle from './grid_ele'

const GridNav = () => {
  let contentTitleSet: string[] = []
  contentTitleSet.push('不受排氣種類影響')
  contentTitleSet.push('反應選擇性高')
  contentTitleSet.push('多種污染物同步脫除')
  contentTitleSet.push('脫除效率高')
  contentTitleSet.push('迅速反應')
  contentTitleSet.push('尾氣檢測')
  contentTitleSet.push('電能消耗低')
  contentTitleSet.push('對原鍋爐影響小')
  contentTitleSet.push('鑑往知來')

  let svgLinkSet: string[] = []
  svgLinkSet.push('images/leaf.svg')
  svgLinkSet.push('images/ban.svg')
  svgLinkSet.push('images/chemical.svg')
  svgLinkSet.push('images/fire.svg')
  svgLinkSet.push('images/fluid.svg')
  svgLinkSet.push('images/glass.svg')
  svgLinkSet.push('images/iron.svg')
  svgLinkSet.push('images/nono.svg')
  svgLinkSet.push('images/power.svg')

  let contentDetailSet: string[] = []
  contentDetailSet.push(
    '只要有<200°C以下的煙道排氣條件和一定的停留時間即可完成脫硝',
  )
  contentDetailSet.push('利用臭氧對NOx反應選擇性使氮氧化物得以優先反應')
  contentDetailSet.push('無須購置其他脫除污染的設備，真正實現“一塔多脫”')
  contentDetailSet.push(
    '選用高分子低溫脫硝系統後排氣的氮氧化物數值降低了約98%之多',
  )
  contentDetailSet.push('臭氧與污染物接觸面積大、反應迅速')
  contentDetailSet.push('檢測尾氣源的化學組成及流量，保持操作性能的一致')
  contentDetailSet.push(
    '臭氧發生系統僅需對部分空氣或氧氣進行放電，即可以 完成臭氧生成',
  )
  contentDetailSet.push(
    '僅在鍋爐尾部煙道進行臭氧噴嘴的布置，所需安裝 均為額外配件',
  )
  contentDetailSet.push(
    '歐珊的氧化脫硝不需要輸入 額外的熱量，流程更簡潔，成本更低',
  )

  return (
    <div className="grid-nav-container">
      <div className="row">
        <GridEle
          svgLink={svgLinkSet[0]}
          contentTitle={contentTitleSet[0]}
          contentDetail={contentDetailSet[0]}
        />
        <GridEle
          svgLink={svgLinkSet[1]}
          contentTitle={contentTitleSet[1]}
          contentDetail={contentDetailSet[1]}
        />
        <GridEle
          svgLink={svgLinkSet[2]}
          contentTitle={contentTitleSet[2]}
          contentDetail={contentDetailSet[2]}
        />
      </div>
      <div className="row">
        <GridEle
          svgLink={svgLinkSet[3]}
          contentTitle={contentTitleSet[3]}
          contentDetail={contentDetailSet[3]}
        />
        <GridEle
          svgLink={svgLinkSet[4]}
          contentTitle={contentTitleSet[4]}
          contentDetail={contentDetailSet[4]}
        />
        <GridEle
          svgLink={svgLinkSet[5]}
          contentTitle={contentTitleSet[5]}
          contentDetail={contentDetailSet[5]}
        />
      </div>
      <div className="row">
        <GridEle
          svgLink={svgLinkSet[6]}
          contentTitle={contentTitleSet[6]}
          contentDetail={contentDetailSet[6]}
        />
        <GridEle
          svgLink={svgLinkSet[7]}
          contentTitle={contentTitleSet[7]}
          contentDetail={contentDetailSet[7]}
        />
        <GridEle
          svgLink={svgLinkSet[8]}
          contentTitle={contentTitleSet[8]}
          contentDetail={contentDetailSet[8]}
        />
      </div>
    </div>
  )
}

export default GridNav
