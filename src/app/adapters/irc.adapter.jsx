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

    this.client = new IRC.Client(server, nick, {
      showErrors : debug,
      debug      : debug,
      port       : port,
      channels   : channels
    })
    .addListener('raw', function (message) {
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

        MessagesActions.addMessage(payload);
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
}
