import Reflux from 'reflux';
import Message from './messages.message';
import MessagesInput from './messages.input.jsx';
import MessagesStore from './messages.store';

export default React.createClass({
  displayName: 'MessagesList',

  mixins: [
    Reflux.listenTo(MessagesStore, 'onChange')
  ],

  getInitialState () {
    return {
      messages: []
    }
  },

  componentWillMount () {
    // get all messages
  },

  onChange (newMessage) {
    let obj = this.state.messages.concat([newMessage]);
    this.setState({
      messages: obj
    });
  },

  render () {
    return (
      <div>
        {this.state.messages.map((data) => {
          return (
            <p><span>{data.user}</span>: {data.message}</p>
          )
        })}
        <MessagesInput />
      </div>
    )
  }
});
