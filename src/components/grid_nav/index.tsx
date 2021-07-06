import './index.css'
import GridEle from './grid_ele'

const GridNav = () => {
  let contentTitleSet: string[] = []
  contentTitleSet.push('A')
  contentTitleSet.push('A')
  contentTitleSet.push('A')
  contentTitleSet.push('A')
  contentTitleSet.push('A')
  contentTitleSet.push('A')
  contentTitleSet.push('A')
  contentTitleSet.push('A')
  contentTitleSet.push('A')

  let svgLinkSet: string[] = []
  svgLinkSet.push('images/leaf.svg')
  svgLinkSet.push('images/leaf.svg')
  svgLinkSet.push('images/leaf.svg')
  svgLinkSet.push('images/leaf.svg')
  svgLinkSet.push('images/leaf.svg')
  svgLinkSet.push('images/leaf.svg')
  svgLinkSet.push('images/leaf.svg')
  svgLinkSet.push('images/leaf.svg')
  svgLinkSet.push('images/leaf.svg')

  let contentDetailSet: string[] = []
  contentDetailSet.push('C')
  contentDetailSet.push('C')
  contentDetailSet.push('C')
  contentDetailSet.push('C')
  contentDetailSet.push('C')
  contentDetailSet.push('C')
  contentDetailSet.push('C')
  contentDetailSet.push('C')
  contentDetailSet.push('C')

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
