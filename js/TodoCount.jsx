/** @jsx Yolk.createElement */

function TodoCount (props) {
  const count = props.todos.flatMap(todos => {
    return Rx.Observable.from(todos)
      .filter(todo => !todo.completed)
      .reduce(acc => acc + 1, 0)
      .map(length => (length === 1) ? `1 item left` : `${length} items left`)
  })

  return <span className="todo-count">{count}</span>
}
