/* global React */
import connectToStores from 'alt/utils/connectToStores';
import Styles         from './messages.styles';
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
    return (
      <div style={Styles.Messages.Wrapper} className='messages__list'>
        {this.props.messages.map((data, key) => {
          return (
            <Message userName={data.user} message={data.message} key={key} />
          );
        })}
      </div>
    );
  }
}

export default connectToStores(Messages);
