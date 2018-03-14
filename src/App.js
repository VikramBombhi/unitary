import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Webview from './Webview.js'
import Home from './Home.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      websites: ["https://www.github.com/"],
      selected: "",
    }
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

  sidebar = () => {
    let links = this.state.websites.map((website) => {
      return (
        <button
          type="button"
          onClick = { () => this.setState({selected: website}) } >
          { website }
        </button>
      )
    })

    links.unshift(
      <button
        type="button"
        onClick = { () => this.setState({selected: ''}) } >
        Home
      </button>
    )
    return links;
  }

  addWebsite = (url) => {
    this.setState({websites: [...this.state.websites, url]})
  }

  render() {
    return (
			<div style={{height: "100%"}}>
				<div className="sidebar">
          < this.sidebar />
				</div>
				<div className="content">
          <Home callback={this.addWebsite.bind(this)} selected={this.state.selected}/>
          <this.content />
				</div>
			</div>
    );
  }
}

export default App;
