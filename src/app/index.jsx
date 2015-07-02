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

import Messages from './messages/messages.jsx';
import MessageInput from './message_input/message_input.jsx';
import Chat from './adapters/adapters.jsx';

if (window.nativeRequire) { window.global = window; }
global.client = new Chat('mock');
// global.client = new Chat('irc');

// Temporary app wrapper
let App = React.createClass({
  render () {
    return (
      <div className='app__wrapper'>
        <div className='nav__wrapper'>
          Top nav will go here
        </div>
        <div className='content__wrapper'>
          <div className='sidebar__wrapper'>
            Sidebar(s) will go here
          </div>
          <div className='messages__wrapper'>
            <Messages />
            <MessageInput />
          </div>
        </div>
      </div>
    );
  }
});

React.render(<App />, document.getElementById('content'));

