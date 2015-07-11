/* global React */

import Member from './member';

export default React.createClass({
  displayName: 'MembersList',

  propTypes: {
    members: React.PropTypes.array.isRequired
  },

  getDefaultProps () {
    return {
      members: [
        {userName: 'Amy', userPhoto: ''},
        {userName: 'Kevin', userPhoto: ''},
        {userName: 'Ted', userPhoto: ''},
        {userName: 'Tyler', userPhoto: ''},
      ]
    };
  },

  render () {
    let members = this.props.members;

    return (
      <div className='members__list'>
        <div className='inner'>
          {members.map((data) => {
            return (
              <Member member={data} />
            );
          })}
        </div>
      </div>
    );
  }
});
