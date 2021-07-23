import { History } from 'history'
import React, { useEffect, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { Switch } from 'react-router-dom'

function ScrollToTop(props: { history: History; children: Switch }) {
  useEffect(() => {
    const unlisten = props.history.listen(() => {
      window.scrollTo(0, 0)
    })
    return () => {
      unlisten()
    }
  }, [])

  return <Fragment>{props.children}</Fragment>
}

export default withRouter(ScrollToTop)
