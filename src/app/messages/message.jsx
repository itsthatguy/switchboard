
import React from 'react'
import Styles from './messages.styles'

export default React.createClass({
  displayName: 'Message',

  propTypes: {
    user: React.PropTypes.string.isRequired,
    message: React.PropTypes.string.isRequired,
    avatar: React.PropTypes.string
  },

  render () {
    return (
      <div style={Styles.Message.Wrapper}>
        <p><strong>{this.props.user}:</strong>{this.props.message}</p>
      </div>
    );
  }
});
