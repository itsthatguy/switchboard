/* global chance */
/* eslint no-console: 0 */
import BaseAdapter     from './base.adapter';
import MessagesActions from '../messages/messages.actions';

export default class ChatMock extends BaseAdapter {
  constructor () {
    super();
    this.client = {};
    this.messages = [];

    // Recieve Message
    let users = ['Amy', 'Kevin', 'Tyler', 'Ted'];
    setInterval(() => {
      let n = Math.floor(Math.random() * users.length);
      let user = users[n];
      let message = chance.sentence();
      this.addMessage({channel: '#test', user: user, message: message});
    }, 3000);
  }

  connect () {
  }

  disconnect () {
  }

  joinRoom (data) {
    console.log(data);
  }

  leaveRoom (data) {
    console.log(data);
  }

  addMessage (data) {
    this.messages.push(data);
    MessagesActions.updateMessages(this.messages);
  }

  sendMessage (data) {
    console.log(data);
  }
}
