function TodoList ({props}) {
  const {todos, filter} = props
  const filterFn = filter.map(getFilterFunction)

  const todoItems =
    todos.combineLatest(filterFn, (ts, f) => f(ts))
    .map(ts => ts.map(todo => <TodoItem todo={todo} key={todo.get('id')} />))

  return <ul className="todo-list">{todoItems}</ul>
}
