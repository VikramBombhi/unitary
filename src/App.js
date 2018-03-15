import React, { Component } from 'react'
import './App.css'
import Webview from './Webview.js'
import Home from './Home.js'
import Sidebar from './Sidebar.js'

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

  selectWebsite = (url) => {
    this.setState({selected: url}); 
  }

  addWebsite = (url) => {
    if(this.state.websites.indexOf(url) === -1) {
      this.setState({websites: [...this.state.websites, url]})
    }
  }

  render() {
    return (
			<div style={{height: "100%"}}>
        <Sidebar websites={this.state.websites} callback={this.selectWebsite.bind(this)} />
				<div className="content">
          <Home callback={this.addWebsite.bind(this)} selected={this.state.selected}/>
          <this.content />
				</div>
			</div>
    );
  }
}

export default App;
