import {h} from 'yolk'

export function PostArticleForm ({props}) {
	return (
		<form>
			<fieldset className="form-group">
				<label for="exampleTextarea"><h2>Say something ?</h2></label>
				<textarea className="form-control" id="exampleTextarea" rows="3" autoFocus></textarea>
			</fieldset>
			<button type="submit" className="btn btn-primary">Post article</button>
		</form>
	);
}
