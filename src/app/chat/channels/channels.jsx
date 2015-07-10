/* global React */
import connectToStores from 'alt/utils/connectToStores';
import ChannelsStore   from './channels.store';

class ChannelsView extends React.Component {
  static getStores () {
    return [ChannelsStore];
  }

  static getPropsFromStores () {
    return ChannelsStore.getState();
  }

  componentWillMount () {
    // debugger;
  }

  componentDidMount () {
    // debugger;
  }

  componentWillUpdate () {
    // debugger;
  }

  componentDidUpdate () {
    // debugger;
  }

  render () {
    return (
      <div className='channels__wrapper'>
        {this.props.channels.map((data, key) => {
          return (
            {data}
          );
        })}
      </div>
    );
  }
}

export default connectToStores(ChannelsView);
