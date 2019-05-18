import React from 'react'

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0,
      tabs: this.props.data
    }
  }
  changeActive = val => {
    this.setState({active: val})
  }
  render() {
    const { children } = this.props
    return children({
      active: this.state.active,
      changeActive: this.changeActive,
      tabs: this.state.tabs
    })
  }
}

export default Tabs