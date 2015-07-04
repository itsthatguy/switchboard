/* global React */
'use strict';

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

import Messages        from './messages/messages';
import MessagesInput   from './messages/input/input';
import MessagesNav     from './messages/nav/nav';
import MessagesSidebar from './messages/sidebar/sidebar';
import Chat            from './adapters/adapters';

if (window.nativeRequire) { window.global = window; }
global.client = new Chat('mock');
// global.client = new Chat('irc');

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

