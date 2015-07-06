import IrcAdapter  from './irc.adapter';
import MockAdapter from './mock.adapter';

export default function(name) {

  let adapters = {
    irc: IrcAdapter || function(){},
    mock: MockAdapter
  };

  return new adapters[name]();
}
