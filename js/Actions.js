import Rx from 'rx'
import Immutable from 'immutable'
import moment from 'moment'
import uuid from 'uuid'

export const Actions = {
	addArticle: new Rx.Subject()
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
