import {h} from 'yolk'

import {Actions} from './Actions.js'

export function TodoItem ({props, createEventHandler}) {
  const {todo} = props

  const toggleComplete = createEventHandler()
  const handleRemove = createEventHandler()
  const handleInputChange = createEventHandler(ev => ev.target.value)
  const handleEditStart = createEventHandler(true)
  const handleEditEnd = createEventHandler(false)

  const editing = handleEditStart.merge(handleEditEnd).startWith(false)
  const completed = todo.map(t => t.get(`completed`))
  const label = todo.map(t => t.get(`label`))

  const itemClassNames = [
    completed.map(bool => bool ? `completed` : ``),
    editing.map(bool => bool ? `editing` : ``)
  ]

  toggleComplete
    .withLatestFrom(todo, (_, t) => t)
    .subscribe(Actions.toggleTodo)

  handleRemove
    .withLatestFrom(todo, (_, t) => t)
    .subscribe(Actions.removeTodo)

  handleEditEnd
    .withLatestFrom(todo, handleInputChange, (_, todo, v) => [todo, v])
    .subscribe(Actions.updateTodo)

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
