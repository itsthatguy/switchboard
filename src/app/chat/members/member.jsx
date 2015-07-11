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
    let avatar    = member.avatar
                    ? <Avatar username={userName} userphoto={userPhoto} />
                    : <span />;

    return (
      <div className='member'>
        <p>{avatar}<strong>{userName}</strong></p>
      </div>
    );
  }
});
