import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Webview from './Webview.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      websites: ["https://stackoverflow.com/questions/29913387/show-hide-components-in-reactjs", "https://www.github.com/"],
      selected: "https://www.github.com/",
    }
  }

  handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  content = () => {
    return (
      this.state.websites.map((website) => {
        return (
          <Webview src={website} selected={this.state.selected} />
        )
      })
    )
  }

  buttons = () => {
    return (
      this.state.websites.map((website) => {
        return (
          <button
            type="button"
            onClick = { () => this.setState({selected: website}) } >
            { website }
          </button>
        )
      })
    )
  }


  render() {
    return (
			<div style={{height: "100%"}}>
				<div className="sidebar">
          < this.buttons />
				</div>
				<div className="content">
          < this.content />
				</div>
			</div>
    );
  }
}

export default App;
