import Reflux          from 'reflux';
import SidebarActions  from './sidebar.actions';

export default Reflux.createStore({
  listenables: SidebarActions,

  onAddService (data) {
    this.trigger(data);
  },

});
