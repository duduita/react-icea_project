import React, { Component } from "react";

// Componente simples (botões do dropdown do VerticalMenu)
export class ButtonWithIcon extends Component {
  render() {
    return (
      <li>
        <a id={this.props.id} href="#home" onClick={this.props.onClick}>
          <img
            alt={this.props.alt}
            className={this.props.className}
            src={this.props.src}
          />
          {this.props.name}
        </a>
      </li>
    );
  }
}

export default ButtonWithIcon;
