/* global React */
import connectToStores from 'alt/utils/connectToStores';
import MessagesStore  from './messages.store';
import Message        from './message';

class Messages extends React.Component {
  static getStores () {
    return [MessagesStore];
  }

  static getPropsFromStores () {
    return MessagesStore.getState();
  }

  componentWillMount () {
    // get all messages
  }

  componentWillUpdate () {
    let node = React.findDOMNode(this);
    this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
  }

  componentDidUpdate () {
    if (this.shouldScrollBottom) {
      let node = React.findDOMNode(this);
      node.scrollTop = node.scrollHeight;
    }
  }

  render () {
    let messages = this.props.messages;

    return (
      <div className='messages__list'>
        {messages.map((data, key) => {
          return (
            <Message userName={data.user} message={data.message} key={key} />
          );
        })}
      </div>
    );
  }
}

export default connectToStores(Messages);
