/* global React */
'use strict';

import Reflux         from 'reflux';
import Styles         from './messages.styles'
import MessagesStore  from './messages.store';
import Message        from './message'


export default React.createClass({
  displayName: 'ChatMessages',

  mixins: [
    Reflux.listenTo(MessagesStore, 'onChange')
  ],

  getInitialState () {
    return { messages: [] }
  },

  componentWillMount () {
    // get all messages
  },

  onChange (newMessage) {
    let obj = this.state.messages.concat([newMessage]);
    this.setState({ messages: obj });
  },

  render () {
    return (
      <div style={Styles.Messages.Wrapper} className='messages__list'>
        {this.state.messages.map((data, key) => {
          return (
            <Message user={data.user} message={data.message} key={key} />
          )
        })}
      </div>
    )
  }
});
