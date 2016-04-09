import Rx from 'rx'
import Immutable from 'immutable'
import moment from 'moment'
import uuid from 'uuid'

export const Actions = {
	addArticle: new Rx.Subject(),
	likeArticle: new Rx.Subject()
}

Actions.register = function (updates) {
	this.addArticle
		.map(content => {
			const article = createArticle(content)
			return state => {
				return state.update(`articles`, articles => articles.unshift(article))
			}
		})
		.subscribe(updates)

	this.likeArticle
		.map(article => {
			return state => {
				return state.update(`articles`, articles => {
					const likes = article.get('likes') + 1;
					const index = articles.indexOf(article)
					return articles.set(index, article.set('likes', likes))
				})
			}
		})
		.subscribe(updates)

}

function createArticle(content) {
	return Immutable.fromJS({
		id: uuid.v1(),
		date: moment().format('LLL'),
		content,
		likes: 0,
		comments: []
	});
}
