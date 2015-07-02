import Reflux from 'reflux';

// Actions
export default Reflux.createActions([
  'connect',
  'disconnect',
  'join',
  'leave',
  'receiveMessage',
  'sendMessage'
]);
