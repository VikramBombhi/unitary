import React, { Component } from 'react';

class Sidebar extends Component {
  buttonsList = () => {
    let buttons = this.props.websites.map((url) => {
      return (
        <div>
          <button
            type="button"
            onClick = { () => this.props.callback(url) } >
            <img src={'https://plus.google.com/_/favicon?domain='+url} alt={url} height='25' width='25'/>
          </button>
          <br />
        </div>
      )
    })

    buttons.push(
      <button
        type="button"
        onClick = { () => this.props.callback('') } >
        <img src='https://cdn0.iconfinder.com/data/icons/round-ui-icons/512/add_blue.png' alt='home' height='25' width='25'/>
      </button>
    )
    return buttons;
  }

  render() {
    return (
      <div className="sidebar">
        <this.buttonsList />
      </div>
    );
  }
}

export default Sidebar;
