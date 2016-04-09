import {h} from 'yolk'

export function PostCommentForm({props}) {
	return (<form>
		<fieldset className="form-group">
			<textarea className="form-control" rows="2"></textarea>
		</fieldset>
		<button type="submit" className="btn btn-primary btn-sm">Add comment</button>
	</form>)
}
