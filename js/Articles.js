import {h} from 'yolk'
import moment from 'moment'

export function Articles({props}) {
	const time = moment().format('LLL')
	return (
		<div className="card card-block">
			<h5 className="card-title">{time}</h5>
			<p className="card-text">Article content</p>
			<a href="#" className="card-link">(+1) Like</a>
			<a href="#" className="card-link">Add comment</a>
			<p></p>
			<ul className="list-group">
				<li className="list-group-item">It's fine</li>
					<li className="list-group-item">I agree</li>
			</ul>
			<p></p>
			<form>
				<fieldset className="form-group">
					<textarea className="form-control" rows="2"></textarea>
				</fieldset>
				<button type="submit" className="btn btn-primary btn-sm">Post comment</button>
			</form>
		</div>
	);
}
