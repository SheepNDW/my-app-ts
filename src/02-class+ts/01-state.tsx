import React, { Component } from 'react'

interface IState {
  name: string
}

export default class App extends Component<any, IState> {
  state = {
    name: 'sheep'
  }

  render() {
    return (
      <div>
        App - {this.state.name.substring(0, 1).toUpperCase() + this.state.name.substring(1)}
        <button
          onClick={() => {
            this.setState({ name: 'hitsuji' })
          }}
        >
          click
        </button>
      </div>
    )
  }
}
