import React from 'react'

class Box extends React.Component {
  render() {
    return (
      <box
        label="containers"
        top="0%"
        left="0%"
        width="100%"
        height="100%"
        border={{type: 'line'}}
        style={{border: {fg: 'blue'}}}>
        Some stats
      </box>
    )
  }
}

class App extends React.Component {

  render () {
    return (
      <Box/>
    )
  }
}

export default App
