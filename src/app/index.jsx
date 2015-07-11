/* global React */

// INCOMING ADAPTER Method Requirements:
//   - connect(data)
//   - disconnect()
//   - join(data)
//   - leave(data)
//   - message(data)

// OUTGOING ADAPTER Method Requirements:
//   - message
//     - nick
//     - channel?
//     - message
//   - join
//     - nick
//     - channel?
//   - systemMessage (admin/op/voice/nick change)

// injectconfig
// endinject

import Messages        from './chat/messages/messages';
import MessagesInput   from './chat/messages/input/input';
import MessagesNav     from './chat/nav/nav';
import MessagesSidebar from './chat/sidebar/sidebar';
import Chat            from './chat/adapters/adapters';

if (window.nativeRequire) { window.global = window; }
// global.client = new Chat('mock');
global.client = new Chat('irc');

// Temporary app wrapper
let App = React.createClass({
  render () {
    return (
      <div className='app__wrapper'>
        <MessagesNav />
        <div className='content__wrapper'>
          <MessagesSidebar />
          <div className='messages__wrapper'>
            <Messages />
            <MessagesInput />
          </div>
        </div>
      </div>
    );
  }
});

React.render(<App />, document.getElementById('content'));

