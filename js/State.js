import Rx from 'rx'
import Immutable from 'immutable'

export function State() {
	const initial = {
		articles: [
			{
				id: '6c84fb90-12c4-11e1-840d-7b25c5ee775a',
				date: 'April 9, 2016 3:26 PM',
				content: 'Article content',
				likes: 1,
				comments: [`It's fine`, `I agree`]
			}
		]
	}

	this.updates = new Rx.BehaviorSubject(Immutable.fromJS(initial))
	this.asObservable = this.updates
		.scan((state, operation) =>
			operation(state)
		)
		.shareReplay(1)
}
