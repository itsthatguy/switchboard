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
      showErrors : false,
      debug      : false,
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

  //
  // NOTE: We will need a better way to handle an actions queue.
  // setTimeout() is a work around for 'async' actions throwing errors.
  //

  addMessage (data) {
    setTimeout(() => {
      this.messages.push(data);
      MessagesActions.updateMessages(this.messages);
    }, 0);
  }

  sendMessage (data) {
    setTimeout(() => {
      this.client.say(data.channel, data.message);
      this.messages.push(data);
      MessagesActions.updateMessages(this.messages);
    }, 0);
  }

  getUsersForChannel (channel) {
    let channelData;
    try {
      channelData = this.client.chans[channel];
    } catch (err) {
      throw new Error('You are not a member of that channel');
    }
    let users = [];
    Object.keys(channelData.users).forEach((key) => {
      users.push({userName: key, userPhoto: ''});
    });

    return users;
  }
}
