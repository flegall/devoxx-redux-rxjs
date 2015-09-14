/** @jsx yolk.createElement */

function TodoCount (props) {
  const todos = props.map(p => p.todos)

  const count = todos.flatMap(todos => {
    return Rx.Observable.from(todos)
      .filter(todo => !todo.completed)
      .scan(acc => acc + 1, 0)
      .map(length => (length === 1) ? `1 item left` : `${length} items left`)
  })

  return <span className="todo-count">{count}</span>
}
