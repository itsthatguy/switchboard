

import Avatar from '../../users/avatar';

export default React.createClass({
  displayName: 'Message',

  propTypes: {
    userName  : React.PropTypes.string.isRequired,
    message   : React.PropTypes.string.isRequired
  },

  //
  // PLACEHOLDER
  // I expect this will come back from data
  //
  getTimeStamp () {
    let date = new Date();
    let hh   = date.getHours();
    let mm   = date.getMinutes();
    let ampm = hh > 12 ? 'pm' : 'am';

    return `${hh}:${mm}${ampm}`;
  },

  render () {
    let userName  = this.props.userName;
    let message   = this.props.message;
    let timeStamp = this.getTimeStamp();

    return (
      <div className='message'>
        <div className='message--avatar'>
          <Avatar username={this.props.userName} />
        </div>
        <div className='message--data'>
          <p><strong>{userName}</strong><small>{timeStamp}</small></p>
          <p>{message}</p>
        </div>
      </div>
    );
  }
});
