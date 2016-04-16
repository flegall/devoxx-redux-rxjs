import {h} from 'yolk'

import {Article} from './Article'

export function Articles({props}) {
	const articles$ = props.articles.map(articles => {
			return articles.map(article => <Article article={article}/>).toArray()
	})
	return <div>{articles$}</div>;
}

