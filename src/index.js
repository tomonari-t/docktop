import blessed from 'blessed'
import React from 'react'
import {render} from 'react-blessed'
import App from './containers/App'

const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'docktop'
})

screen.key(['escape', 'q', 'C-c'], () => {
  return process.exit(0)
})

render(<App />, screen)
