import {h} from 'yolk'
import {Article} from './Article'

export function Articles({props}) {
	const articles$ = props.articles.map(articles =>
		articles.map(article => <Article article={article}/>)
	)
	return <div>{articles$}</div>;
}

