import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { logoutAndUnauth } from 'redux/modules/users'
import { Logout } from 'components'

class LogoutContainer extends Component {
  componentDidMount () {
    this.props.dispatch(logoutAndUnauth())
  }

  render () {
    return (
      <Logout />
    )
  }
}

LogoutContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(LogoutContainer)
