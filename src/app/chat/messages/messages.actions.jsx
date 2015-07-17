import alt from '../../alt';

class MessagesActions {
  connect() { return {}; }
  disconnect() { return {}; }
  join() { return {}; }
  leave() { return {}; }
  updateMessages(messages) { return messages; }
  sendMessage(message) { return message; }
}

export default alt.createActions(MessagesActions);
