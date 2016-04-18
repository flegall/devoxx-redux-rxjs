import Rx from 'rx'
import Immutable from 'immutable'
import moment from 'moment'
import uuid from 'uuid'

export class Store {
	constructor() {
		const initialState = { articles: [{
			id: uuid.v1(),
			date: 'April 16, 2016 5:38 PM',
			content: 'I love cookies',
			likes: 1,
			comments: ['Me too']
		}]};
		this.updates$ = new Rx.BehaviorSubject(Immutable.fromJS(initialState))
		this.asObservable = this.updates$.scan((state, action) => action(state))

		Actions.addArticle$.map(content => state => {
			const article = Immutable.fromJS({
							id: uuid.v1(),
							date: moment().format('LLL'),
							content,
							likes: 0,
							comments: []
						})
			return state.update('articles', articles => articles.unshift(article))
		}).subscribe(this.updates$)
	}
}

export const Actions = {
	addArticle$: new Rx.Subject(),
	likeArticle$: new Rx.Subject(),
	addComment$: new Rx.Subject(),
}
