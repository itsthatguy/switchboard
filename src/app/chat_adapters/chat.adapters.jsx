import IrcAdapter from './chat.irc';

export default function(foo) {

  let adapters = {
    irc: IrcAdapter
  };

  return adapters[foo];
}
