/* global React */
import Actions from '../messages.actions';

export default React.createClass({
  displayName: 'MessagesInput',

  getInitialState () {
    return { value: '' };
  },

  handleSubmit (e) {
    e.preventDefault();
    Actions.sendMessage(this.state.value);
    this.setState({ value: '' });
  },

  onChange (e) {
    this.setState({ value: e.target.value });
  },

  render () {
    // Placeholder styles
    let styles = {
      wrapper: {
        marginTop: '1rem'
      },
      input: {
        width: '100%',
        height: '1rem',
        padding: '1rem',
        color: '#333333'
      }
    };

    return (
      <div style={styles.wrapper} className='message__input'>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder='Say something!'
            style={styles.input}
            type='text'
            autofill='false'
            value={this.state.value}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
});
