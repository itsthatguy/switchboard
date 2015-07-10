/* global React */
import Reflux         from 'reflux';
import SidebarActions from './sidebar.actions';
import SidebarStore   from './sidebar.store';

export default React.createClass({
  displayName: 'MessagesSidebar',

  mixins: [
    Reflux.listenTo(SidebarStore, 'onAddService')
  ],

  getInitialState () {
    return { };
  },

  addService (e) {
    console.log('e: ', e);
  },

  render () {

    return (
      <div className='sidebar__wrapper'>
        <div className='sidebar__add-service' onClick={this.addService}>Add</div>
      </div>
    );
  }
});
