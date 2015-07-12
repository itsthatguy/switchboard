import alt from '../../alt';
import SidebarActions from './sidebar.actions';

class SidebarStore {
  constructor () {
    this.bindListeners({
      onUpdateServices: SidebarActions.updateServices,
      onUpdateChannels: SidebarActions.updateChannels,
    });

    this.state = {
      services: [],
      channels: [],
    };
  }

  onUpdateServices (services) {
    this.setState({services: services});
  }

  onUpdateChannels (channels) {
    this.setState({channels: channels});
  }
}

export default alt.createStore(SidebarStore, 'SidebarStore');
