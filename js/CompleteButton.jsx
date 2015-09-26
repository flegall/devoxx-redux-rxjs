/** @jsx Yolk.createElement */

function CompleteButton () {
  const handleClear = Yolk.createEventHandler()

  handleClear.subscribe(TodoActions.clearCompleted)

  return <button className="clear-completed" onClick={handleClear}>Clear completed</button>
}
