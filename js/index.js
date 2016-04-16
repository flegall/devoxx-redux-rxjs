import {h, render} from 'yolk'

import {App} from './App'
import {Store} from './Store'

const store = new Store()

render(
	<App state={store.asObservable}/>,
	document.querySelector('#container')
)
