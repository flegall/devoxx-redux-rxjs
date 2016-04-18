import {h} from 'yolk'

import {Actions} from './Store'

import Rx from 'rx'
import classnames from 'classnames';

export function PostArticleForm ({props, createEventHandler}) {
	const handleSubmit = createEventHandler(ev => ev.preventDefault())
	const handleChange = createEventHandler(ev => ev.target.value)
	const displayValue = new Rx.BehaviorSubject('')

	handleSubmit
		.withLatestFrom(displayValue, (_, val) => val)
		.filter(val => val.length > 0)
		.subscribe(Actions.addArticle$)

	handleChange.subscribe(displayValue)
	handleSubmit.map(() => '').subscribe(displayValue)

	const buttonClassNames = displayValue.map(val => val.length > 0)
		.map(hasValue => classnames('btn', 'btn-primary', {disabled: !hasValue}))

	return (
		<form onSubmit={handleSubmit}>
			<fieldset className="form-group">
				<label for="exampleTextarea"><h2>Say something ?</h2></label>
				<textarea className="form-control"
						  id="exampleTextarea"
						  rows="3"
						  autoFocus
						  onKeyUp={handleChange}
						  value={displayValue}
				/>
			</fieldset>
			<button type="submit" className={buttonClassNames}>Add article</button>
		</form>
	);
}
