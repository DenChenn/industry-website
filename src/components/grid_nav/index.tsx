import './index.css'
import GridEle from './grid_ele'

const GridNav = () => {
  let contentTitleSet: string[] = []
  contentTitleSet.push('AAAAAAAAAAA')
  contentTitleSet.push('AAAAAAAAAAA')
  contentTitleSet.push('AAAAAAAAAAA')
  contentTitleSet.push('AAAAAAAAAAA')
  contentTitleSet.push('AAAAAAAAAAA')
  contentTitleSet.push('AAAAAAAAAAA')
  contentTitleSet.push('AAAAAAAAAAA')
  contentTitleSet.push('AAAAAAAAAAA')
  contentTitleSet.push('AAAAAAAAAAA')

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
  contentDetailSet.push('CCCCCCCCC\nCCCCCCCCCCCCCCCCCCCC\nCCCCCCCCCCCCCCCCC')
  contentDetailSet.push('CCCCCCCCC\nCCCCCCCCCCCCCCCCCCCC\nCCCCCCCCCCCCCCCCC')
  contentDetailSet.push('CCCCCCCCC\nCCCCCCCCCCCCCCCCCCCC\nCCCCCCCCCCCCCCCCC')
  contentDetailSet.push('CCCCCCCCC\nCCCCCCCCCCCCCCCCCCCC\nCCCCCCCCCCCCCCCCC')
  contentDetailSet.push('CCCCCCCCC\nCCCCCCCCCCCCCCCCCCCC\nCCCCCCCCCCCCCCCCC')
  contentDetailSet.push('CCCCCCCCC\nCCCCCCCCCCCCCCCCCCCC\nCCCCCCCCCCCCCCCCC')
  contentDetailSet.push('CCCCCCCCC\nCCCCCCCCCCCCCCCCCCCC\nCCCCCCCCCCCCCCCCC')
  contentDetailSet.push('CCCCCCCCC\nCCCCCCCCCCCCCCCCCCCC\nCCCCCCCCCCCCCCCCC')
  contentDetailSet.push('CCCCCCCCC\nCCCCCCCCCCCCCCCCCCCC\nCCCCCCCCCCCCCCCCC')

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
