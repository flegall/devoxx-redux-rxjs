import Rx from 'rx'
import Immutable from 'immutable'

export function State() {
	const initial = {
		articles: [
			{
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
