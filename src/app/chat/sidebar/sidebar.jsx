/* global React */
import Reflux         from 'reflux';
import Modal          from 'react-modal';
import SidebarStore   from './sidebar.store';

Modal.setAppElement(document.getElementById('content'));
Modal.injectCSS();

export default React.createClass({
  displayName: 'MessagesSidebar',

  mixins: [
    Reflux.listenTo(SidebarStore, 'onAddService')
  ],

  getInitialState () {
    return {
      modalIsOpen: false
    };
  },

  openModal () {
    this.setState({modalIsOpen: true});
  },

  closeModal () {
    this.setState({modalIsOpen: false});
  },

  addService () {
    this.openModal(true);
  },

  render () {

    return (
      <div className='sidebar__wrapper'>
        <div className='sidebar__add-service' onClick={this.addService}>Add</div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        >
          <h3>Choose an adapter</h3>
          <select>
            <option>Mock Adapter</option>
            <option>IRC Adapter</option>
          </select>
          <button>Submit</button>
        </Modal>
      </div>
    );
  }
});
