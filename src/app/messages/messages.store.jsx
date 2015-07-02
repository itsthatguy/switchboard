import Reflux from 'reflux';

import MessagesActions from './messages.actions';

// Store
export default Reflux.createStore({
  listenables: MessagesActions,

  onConnect () {

  },

  onDisconnect () {

  },

  onJoin () {

  },

  onLeave () {

  },

  onMessage (data) {
    this.trigger(data);
  },

  onSendMessage (message) {
    global.client.message({channel: '#test', message: message});
  }
});
