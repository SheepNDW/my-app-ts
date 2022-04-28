import React, { Component } from 'react'

export default class App extends Component {
  state = {
    isShow: true
  }

  render() {
    return (
      <div>
        App
        <Navbar
          title="首頁"
          cb={() => {
            this.setState({ isShow: !this.state.isShow })
          }}
        />
        {this.state.isShow && <Sidebar />}
      </div>
    )
  }
}

interface IProps {
  title: string
  cb: () => void
}

class Navbar extends Component<IProps, any> {
  render() {
    return (
      <div>
        Navbar - {this.props.title}
        <button onClick={() => this.props.cb()}>click</button>
      </div>
    )
  }
}

class Sidebar extends Component {
  render() {
    return <div>Sidebar</div>
  }
}
