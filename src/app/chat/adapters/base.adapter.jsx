'use strict';

export default class BaseAdapter {
  constructor() {}

  connect () { throw new Error(); }
  disconnect () { throw new Error(); }
  joinRoom () { throw new Error(); }
  leaveRoom () { throw new Error(); }
  receiveMessage () { throw new Error(); }
  sendMessage () { throw new Error(); }
}
