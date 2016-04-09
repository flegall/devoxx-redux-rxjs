import {h, render} from 'yolk'

import {App} from './App'
import {State} from './State'
import {Actions} from './Actions'

const state = new State()
Actions.register(state.updates)

render(
	<App state={state.asObservable}/>,
	document.querySelector('#container')
)
