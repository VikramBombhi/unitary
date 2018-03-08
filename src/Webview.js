import React, { Component } from 'react';

class Webview extends Component {
  render() {
    let isSelected = this.props.selected === this.props.src;
    return (
      <webview
        src={this.props.src}
        style={{height: "100%", display: isSelected ? "flex" : "none"}}>
      </webview>
    )
  }
}

Webview.defaultProps ={
  src: "",
  selected: "",
};

export default Webview;
