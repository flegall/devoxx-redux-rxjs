function TodoItem (props) {
  const {todo} = props

  const toggleComplete = this.createEventHandler()
  const handleRemove = this.createEventHandler()
  const handleInputChange = this.createEventHandler(ev => ev.target.value)
  const handleEditStart = this.createEventHandler(true)
  const handleEditEnd = this.createEventHandler(false)

  const editing = handleEditStart.merge(handleEditEnd).startWith(false)
  const completed = todo.map(t => t.get('completed'))
  const label = todo.map(t => t.get('label'))


  const itemClassNames = [
    completed.map(bool => bool ? `completed` : ``),
    editing.map(bool => bool ? `editing` : ``)
  ]

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
