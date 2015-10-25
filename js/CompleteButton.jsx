function CompleteButton () {
  const handleClear = this.createEventHandler()

  handleClear.subscribe(Actions.clearCompletedTodos)

  return <button className="clear-completed" onClick={handleClear}>Clear completed</button>
}
