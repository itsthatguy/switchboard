import alt from '../../alt';
import MessagesActions from './messages.actions';

class MessagesStore {
  constructor () {
    this.bindListeners({
      onConnect: MessagesActions.connect,
      onDisconnect: MessagesActions.disconnect,
      onJoin: MessagesActions.join,
      onLeave: MessagesActions.leave,
      onUpdateMessages: MessagesActions.updateMessages,
      onSendMessage: MessagesActions.sendMessage,
    });

    this.state = {
      messages: []
    };
  }

  onConnect () {
    // User will see a connect message
  }

  onDisconnect () {
    // User will see a disconnect message
  }

  onJoin () {
    // User will see a join message
  }

  onLeave () {
    // User will see a leave messages
  }

  onUpdateMessages (messages) {
    this.setState({messages: messages});
  }

  onSendMessage (message) {
    global.client.sendMessage({channel: '#test', message: message, user: '__NEED_USERNAME__'});
  }
}

export default alt.createStore(MessagesStore, 'MessagesStore');
