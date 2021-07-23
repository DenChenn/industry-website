import { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { History } from 'history'

function ScrollToTop(props: { history: History }) {
  useEffect(() => {
    const unlisten = props.history.listen(() => {
      window.scrollTo(0, 0)
    })
    return () => {
      unlisten()
    }
  }, [])

  return null
}

export default withRouter(ScrollToTop)
