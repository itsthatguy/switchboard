import alt from '../../alt';
import ChannelsActions from './channels.actions';

class ChannelsStore {
  constructor () {
    this.bindListeners({
      onUpdateChannels: ChannelsActions.updateChannels,
    });

    this.state = {
      channels: []
    };
  }

  onUpdateChannels (channels) {
    this.setState({channels: channels});
  }
}

export default alt.createStore(ChannelsStore, 'ChannelsStore');
