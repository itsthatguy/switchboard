let IRC = window.require('irc');
import MessagesActions from '../messages/messages.actions';

export default function () {
  let server   = 'localhost';
  let nick     = 'switchboard';
  let port     = 6667;
  let debug    = true;
  let channels = ['#test'];

  let client = new IRC.Client(server, nick, {
    showErrors : debug,
    debug      : debug,
    port       : port,
    channels   : channels
  })
  .addListener('raw', function (message) {
    eventHandler(message);
  });

  function eventHandler (data) {
    let command = data.command;

    switch (command) {
      case 'PRIVMSG': {
        // do something
        let payload = {
          user    : data.nick,
          channel : data.args[0],
          message : data.args[1]
        };

        MessagesActions.message(payload);
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

  return {
    // data = {channel: string, message: straing};
    message: function (data) {
      client.say(data.channel, data.message);
    }
  }
};
