
import React, { Component } from 'react'
import { Image } from "react-bootstrap";

export default class AvatarList extends Component {
  state={
    showInfo:false
  };
  handleClick=()=>{
    this.setState({showInfo: !this.state.showInfo});
  };
  render() {
    return (
      <div className="gr1">
        <Image src={this.props.img} className="img" responsive />
        <div className="info">
          <h3>{this.props.name}</h3>
          <h4>{this.props.work} </h4>
          <h5>
            Info{" "}
            <span onClick={this.handleClick}>
            <i class="far fa-caret-square-down"></i>
            </span>
          </h5>
          {this.state.showInfo && <p>{this.props.info}</p>}
          
        </div>
      </div>
    );
  };
}