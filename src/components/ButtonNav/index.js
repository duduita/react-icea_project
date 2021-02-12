import React, { Component } from "react";

export class ButtonNav extends Component {
  render() {
    return (
      <li>
        <a id={this.props.id} href="#home">
          <img
            alt={this.props.alt}
            className={this.props.iconSize}
            src={this.props.src}
          />
          {this.props.name}
        </a>
        {this.props.children}
      </li>
    );
  }
}
export default ButtonNav;
