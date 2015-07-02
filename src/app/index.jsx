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
// import Shim from './shim';
import MessagesList from './messages/messages';
import Chat from './adapters/adapters';

let global = global || window;

global.client = new Chat('mock');

React.render(<MessagesList />, document.getElementById('content'));
