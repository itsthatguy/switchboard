import MessagesActions from '../messages/messages.actions';

export default React.createClass({
  displayName: 'MessagesInput',

  mixins: [],

  getInitialState () {
    return {
      messages: ''
    }
  },

  componentWillMount () {
    // get all messages
  },

  onChange (event) {
    this.setState({value: event.target.value});
  },

  onKeyDown (event) {
    if (event.keyCode === 13) {
      MessagesActions.sendMessage(event.target.value);
      this.setState({value: ''});
    }
  },

  render () {
    return (
      <div>
        <input type='text' value={this.state.value} onKeyDown={this.onKeyDown} />
      </div>
    )
  }
});
