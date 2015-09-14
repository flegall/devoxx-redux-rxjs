/** @jsx yolk.createElement */

function TodoItem (props) {
  const {todo} = props

  const toggleComplete = yolk.createEventHandler()
  const handleRemove = yolk.createEventHandler()
  const handleInputChange = yolk.createEventHandler(ev => ev.target.value)
  const handleEditStart = yolk.createEventHandler(() => true)
  const handleEditEnd = yolk.createEventHandler(() => false)

  const editing = handleEditStart.merge(handleEditEnd).startWith(false)
  const completed = todo.map(t => t.completed)
  const label = todo.map(t => t.label)

  const itemClassNames = Rx.Observable.combineLatest(completed, editing, (completed, editing) => {
    let classes = ``

    if (completed) {
      classes += ` completed`
    }

    if (editing) {
      classes += ` editing`
    }

    return classes
  })

  toggleComplete
    .withLatestFrom(todo, (_, t) => t)
    .subscribe(TodoActions.toggle)

  handleRemove
    .withLatestFrom(todo, (_, t) => t)
    .subscribe(TodoActions.remove)

  handleEditEnd
    .withLatestFrom(todo, handleInputChange, (_, todo, v) => [todo, v])
    .subscribe(TodoActions.update)

  return (
    <li className={itemClassNames}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} onChange={toggleComplete} />
        <label onDblClick={handleEditStart}>{label}</label>
        <button className="destroy" onClick={handleRemove}></button>
      </div>
      <input className="edit" value={label} onBlur={handleEditEnd} onChange={handleInputChange} />
    </li>
  )
}
