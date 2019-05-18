import React from 'react'

class Toggle extends React.Component {
  state = {
    on: false
  }
  handleToggle = () => {
    this.setState({on: !this.state.on})
  }
  render() {
    const { children } = this.props
    return children({
      on: this.state.on,
      handleToggle: this.handleToggle
    })
  }
}

export default Toggle