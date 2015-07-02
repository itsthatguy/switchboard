'use strict';

import Reflux from 'reflux';
import MessagesActions from './messages.actions';

// Store
export default Reflux.createStore({
  listenables: MessagesActions,

  onConnect () {
    // User will see a connect message
  },

  onDisconnect () {
    // User will see a disconnect message
  },

  onJoin () {
    // User will see a join message
  },

  onLeave () {
    // User will see a leave messages
  },

  onRecieveMessage (data) {
    this.trigger(data);
  },

  onSendMessage (message) {
    global.client.sendMessage({channel: '#test', message: message});
    console.log('New message:', message);
  }
});
