import {h} from 'yolk'

import {Actions} from './Actions.js'

export function CompleteButton ({createEventHandler}) {
  const handleClear = createEventHandler()

  handleClear.subscribe(Actions.clearCompletedTodos)

  return <button className="clear-completed" onClick={handleClear}>Clear completed</button>
}
