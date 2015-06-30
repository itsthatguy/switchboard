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
import Chat from './chat_adapters/chat.adapters.jsx';

let client = new Chat('irc')();

React.render(<Messages />, document.getElementById('content'));

/**
 * Browser-dev shim
 * shim all native modules here
 */

(function(){
  function shim(name){ // jshint ignore:line
    // put shims for native-requires in here, for browser testing
  }

  window.nativeRequire = (typeof require !== 'undefined') ? require : shim;
})();
