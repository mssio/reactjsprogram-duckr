import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Duck } from 'components'
import * as usersLikesActions from 'redux/modules/usersLikes'

const { func, object, bool, number } = PropTypes

class DuckContainer extends Component {

  goToProfile = (e) => {
    e.stopPropagation()
    this.context.router.push('/' + this.props.duck.uid)
  }

  handleClick = (e) => {
    e.stopPropagation()
    this.context.router.push('/duckDetail/' + this.props.duck.duckId)
  }

  render () {
    return (
      <Duck
        goToProfile={this.goToProfile}
        onClick={this.props.hideReplyBtn === true ? null : this.handleClick}
        {...this.props}/>
    )
  }
}

DuckContainer.propTypes = {
  duck: object.isRequired,
  numberOfLikes: number,
  isLiked: bool.isRequired,
  hideLikeCount: bool.isRequired,
  hideReplyBtn: bool.isRequired,
  handleDeleteLike: func.isRequired,
  addAndHandleLike: func.isRequired,
}

DuckContainer.defaultProps = {
  hideReplyBtn: false,
  hideLikeCount: true,
}

DuckContainer.contextTypes = {
  router: object.isRequired
}

function mapStateToProps ({ducks, likeCount, usersLikes}, props) {
  return {
    duck: ducks[props.duckId],
    hideLikeCount: props.hideLikeCount,
    hideReplyBtn: props.hideReplyBtn,
    isLiked: usersLikes[props.duckId] === true,
    numberOfLikes: likeCount[props.duckId],
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(usersLikesActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DuckContainer)
