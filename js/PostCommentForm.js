import {h} from 'yolk'

import Rx from 'rxjs'
import classnames from 'classnames';

import {Actions} from './Actions'

export function PostCommentForm({props, createEventHandler}) {
	const article$ = props.article

	const handleSubmit = createEventHandler(ev => ev.preventDefault())
	const handleChange = createEventHandler(ev => ev.target.value)
	const displayValue = new Rx.BehaviorSubject('')

	handleSubmit
		.withLatestFrom(displayValue, (_, val) => val)
		.filter(val => val.length > 0)
		.withLatestFrom(article$, (text, article) => {
			return {text, article}
		})
		.subscribe(Actions.addComment)

	handleChange.subscribe(displayValue)
	handleSubmit.map(() => '').subscribe(displayValue)

	const buttonClassNames = displayValue.map(val => val.length > 0)
		.map(hasValue => classnames('btn', 'btn-primary', {disabled: !hasValue}))

	return (<form onSubmit={handleSubmit}>
		<fieldset className="form-group">
			<textarea className="form-control" rows="2"
					  onKeyUp={handleChange}
					  value={displayValue}/>
		</fieldset>
		<button type="submit" className={buttonClassNames}>Add comment</button>
	</form>)
}
