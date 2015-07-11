let IRC = window.nativeRequire('irc');
import BaseAdapter     from './base.adapter';
import MessagesActions from '../messages/messages.actions';

export default class IrcAdapter extends BaseAdapter {
  constructor () {
    super();
    this.server   = 'localhost';
    this.nick     = 'switchboard';
    this.port     = 6667;
    this.debug    = true;
    this.channels = ['#test'];
    this.messages = [];

    this.client = new IRC.Client(this.server, this.nick, {
      showErrors : this.debug,
      debug      : this.debug,
      port       : this.port,
      channels   : this.channels
    })
    .addListener('raw', (message) => {
      this.eventHandler(message);
    });
  }

  eventHandler (data) {
    let command = data.command;

    switch (command) {
      case 'PRIVMSG': {
        // do something
        let payload = {
          user    : data.nick,
          channel : data.args[0],
          message : data.args[1]
        };

        this.addMessage(payload);
        break;
      }
      case 'JOIN': {
        // do something
        break;
      }
      default: {
        break;
      }
    }
  }

  addMessage (data) {
    this.messages.push(data);
    MessagesActions.updateMessages(data);
  }

  sendMessage (data) {
    this.client.say(data.channel, data.message);
  }

  getUsersForChannel (channel) {
    let channel;
    try {
      channel = this.client.chans[channel];
    } catch (err) {
      return throw new Error('You are not a member of that channel');
    }
    return channel.users;
  }
}
