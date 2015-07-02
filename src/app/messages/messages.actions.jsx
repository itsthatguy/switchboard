'use strict';

let Reflux = window.require('reflux');

// Actions
export default Reflux.createActions([
  'connect',
  'disconnect',
  'join',
  'leave',
  'recieveMessage',
  'sendMessage'
]);
