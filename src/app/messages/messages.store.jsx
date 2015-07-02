'use strict';

let Reflux = window.require('reflux');
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

  onSendMessage (data) {
    console.log('New message:', data);
  }
});
