import Rx from 'rx'
import Immutable from 'immutable'

export function State() {
	const initial = {articles: []};

	this.updates = new Rx.BehaviorSubject(Immutable.fromJS(initial))
	this.asObservable = this.updates
		.scan((state, operation) =>
			operation(state)
		)
		.shareReplay(1)
}
