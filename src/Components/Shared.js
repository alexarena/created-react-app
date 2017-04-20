import React, { Component } from 'react'

export class Icon extends Component{
  render(){
    return (
      <i className={`fa fa-${this.props.name}`} aria-hidden="true"></i>
    )
  }
}
