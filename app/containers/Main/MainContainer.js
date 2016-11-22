import React, { Component, PropTypes } from 'react'
import { Navigation } from 'components'
import { container, innerContainer } from './styles.css'

class MainContainer extends Component {
  render () {
    return (
      <div className={container}>
        <Navigation isAuthed={false} />
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainContainer
