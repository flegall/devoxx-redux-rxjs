/** @jsx yolk.createElement */

function CompleteButton () {
  const handleClear = yolk.createEventHandler()

  handleClear.subscribe(TodoActions.clearCompleted)

  return <button className="clear-completed" onClick={handleClear}>Clear completed</button>
}
