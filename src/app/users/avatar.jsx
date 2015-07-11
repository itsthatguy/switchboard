/* global React */

export default React.createClass({
  displayName: 'Avatar',

  propTypes: {
    userName: React.PropTypes.string,
    userPhoto: React.PropTypes.string
  },

  getDefaultProps () {
    return {
      userPhoto: ''
    };
  },

  render () {
    return (
      <span className='user__avatar'>
        {this.props.userPhoto
          ? <img src={this.props.userPhoto} />
          : <span className='user__avatar--placeholder' />}
      </span>
    );
  }
});
