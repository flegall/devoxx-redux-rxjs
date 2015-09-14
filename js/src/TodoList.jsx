/** @jsx yolk.createElement */

function TodoList (props) {
  const {todos, filter} = props

  const todoItems =
    todos
    .combineLatest(filter, (todos, filter) => filter.fn(todos))
    .flatMapLatest(todos => {
      return Rx.Observable.from(todos).reduce((acc, todo) => acc.concat(<TodoItem todo={todo} key={todo.id} />), [])
    })

  return <ul className="todo-list">{todoItems}</ul>
}
