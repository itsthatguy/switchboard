/* global React */

/* global React */
import connectToStores from 'alt/utils/connectToStores';
import SidebarStore   from './sidebar.store';
import Service from './service/service';
import Channel from './channel/channel';

class SidebarView extends React.Component {
  static getStores () {
    return [SidebarStore];
  }

  static getPropsFromStores () {
    return SidebarStore.getState();
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
      <div className='sidebar__wrapper'>
        <div className='services__wrapper'>
          {this.props.services.map((data) => {
            return (
              <Service key={data.id} data={data} />
            );
          })}
        </div>
        <div className='channels__wrapper'>
          {this.props.channels.map((data) => {
            return (
              <Channel key={data.id} data={data} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default connectToStores(SidebarView);
