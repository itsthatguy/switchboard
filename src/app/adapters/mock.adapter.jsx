import BaseAdapter     from './base.adapter';
import MessagesActions from '../messages/messages.actions';

export default class ChatMock extends BaseAdapter {
  constructor () {
    super();
    this.client = {};

    // Recieve Message
    let users = ['Amy', 'Kevin', 'Tyler', 'Ted'];
    setInterval(() => {
      let randomNumber = Math.floor(Math.random() * 10000) - 1;
      let n = Math.floor(Math.random() * users.length);
      let user = users[n];
      this.sendMessage({channel: '#test', user: user, message: `hello ${randomNumber}`});
    }, 3000);
  }

  connect () {

  }

  disconnect () {

  }

  joinRoom (data) {

  }

  leaveRoom (data) {

  }

  receiveMessage (data) {

  }

  sendMessage (data) {
    console.log(data);
  }
}
