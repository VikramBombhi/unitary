import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {addWebsite: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.callback(this.state.value)
  }

  render() {
    return (
			<div style={{height: "100%", width: "60%", margin: "auto", display: this.props.selected ? "none" : "flex"}}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter the URL of a website you want to add
          </label>
          <br/>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Home;
