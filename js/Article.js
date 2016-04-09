import {h} from 'yolk'

export function Article({props}) {
	const {article} = props;
	const date = article.map(a => a.get('date'))
	const content = article.map(a => a.get('content'))
	const likeCount = article.map(a => a.get('likes'))
		.map(count => count !== 0 ? `(+${count})`: '')
	const comments = article.map(a => a.get('comments'))

	return (<div className="card card-block">
		<h5 className="card-title">{date}</h5>
		<p className="card-text">{content}</p>
		<a href="#" className="card-link">{likeCount} Like</a>
		<a href="#" className="card-link">Add comment</a>
		<p></p>
		<ul className="list-group">
			{comments.map(comments => comments.map(comment =>
				<li className="list-group-item">{comment}</li>
			))}
		</ul>
		<p></p>
		<form>
			<fieldset className="form-group">
				<textarea className="form-control" rows="2"></textarea>
			</fieldset>
			<button type="submit" className="btn btn-primary btn-sm">Post comment</button>
		</form>
	</div>);
}
