import alt from '../../alt';

class SidebarActions {
  updateChannels(channels) { return channels; }
  updateServices(services) { return services; }
}

export default alt.createActions(SidebarActions);
