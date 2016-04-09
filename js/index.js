import {h, render} from 'yolk'

import {App} from './App'

import {State} from './State'

const state = new State()

render(
	<App state={state.asObservable}/>,
	document.querySelector('#container')
)
