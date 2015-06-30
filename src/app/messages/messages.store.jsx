let Reflux = window.require('reflux');

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
  }
});
