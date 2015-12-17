import {h, render} from 'yolk'

import {Actions} from './Actions.js'
import {App} from './App.jsx'
import {State} from './State.js'

const state = new State()
Actions.register(state.updates)

render(
  <App state={state.asObservable} />,
  document.querySelector('#container')
)
