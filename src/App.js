import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div className="Home">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">Welcome to React</h1>
		</header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
)

const Github = () => (
  <webview src="https://www.github.com/" ></webview>
)

class App extends Component {
  render() {
    return (
			<div style={{height: "100%"}}>
				<div class="sidebar">
					<ul>
						<li><a href="#">test</a></li>
						<li><a href="#">test</a></li>
						<li><a href="#">test</a></li>
						<li><a href="#">test</a></li>
						<li><a href="#">test</a></li>
					</ul>
				</div>
				<div class="content">
          <Github />
				</div>
			</div>
    );
  }
}

export default App;
