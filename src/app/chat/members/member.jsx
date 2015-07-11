/* global React */

import Avatar from '../../users/avatar';

export default React.createClass({
  displayName: 'Member',

  propTypes: {
    member: React.PropTypes.object
  },

  render () {
    let member    = this.props.member;
    let userName  = member.userName;
    let userPhoto = member.userPhoto; // Temporarily named

    return (
      <div className='member'>
        <Avatar username={userName} userphoto={userPhoto} />
        <span>{userName}</span>
      </div>
    );
  }
});
