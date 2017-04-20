import React, { Component } from 'react'
import {Icon} from '../Components/Shared.js'

export default class Frame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      className: "bounce",
      "isLoading":false
    }
  }

  componentWillMount() {}
  
  render() {
    return (
      <div>
        { this.state.isLoading &&
          <div className="loader">Loading...</div>
        }

        { !this.state.isLoading &&
          <div>
            <h1 className={`animated ${this.state.className}`}>
              <Icon name="smile-o"/> Hello, world
            </h1>
          </div>
        }

      </div>
    )
  }
}
