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
		this.asObservable = this.updates$
			.scan((state, action) => action(state))
			.shareReplay(1)

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

		Actions.likeArticle$.map(article => state => {
			return state.update('articles', articles => {
				const likes = article.get('likes') + 1;
				const index = articles.indexOf(article)
				return articles.set(index, article.set('likes', likes))
			})
		}).subscribe(this.updates$)

		Actions.addComment$
			.map(({text, article}) => {
				return state => {
					return state.update('articles', articles => {
						const comments = article.get('comments').push(text);
						const index = articles.indexOf(article)
						return articles.set(index, article.set('comments', comments))
					})
				}
			}).subscribe(this.updates$)
	}
}

export const Actions = {
	addArticle$: new Rx.Subject(),
	likeArticle$: new Rx.Subject(),
	addComment$: new Rx.Subject(),
}
