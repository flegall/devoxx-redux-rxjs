import {h} from 'yolk'

import {PostCommentForm} from './PostCommentForm'
import {Actions} from './Actions'

export function Article({props, createEventHandler}) {
	const {article} = props;
	const date$ = article.map(a => a.get('date'))
	const content$ = article.map(a => a.get('content'))
	const likeCount$ = article.map(a => a.get('likes'))
		.map(count => count !== 0 ? `(+${count})`: '')
	const comments$ = article.map(a => a.get('comments'))

	const handleLike = createEventHandler()
	handleLike.withLatestFrom(article, (_, a) => a)
		.subscribe(Actions.likeArticle)

	return (<div className="card card-block">
		<h5 className="card-title">{date$}</h5>
		<p className="card-text">{content$}</p>
		<a href="#" onClick={handleLike} className="card-link">{likeCount$} Like</a>
		<p/>
		<ul className="list-group">
			{comments$.map(comments => comments.map(comment =>
				<li className="list-group-item">{comment}</li>
			).toArray())}
		</ul>
		<p/>
		<PostCommentForm article={article}/>
	</div>);
}
