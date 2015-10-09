function TodoList (props) {
  const {todos, filter} = props

  const todoItems =
    todos
    .combineLatest(filter, (todos, filter) => filter.fn(todos))
    .map(todos => todos.map(todo => <TodoItem todo={todo} key={todo.get('id')} />))

  return <ul className="todo-list">{todoItems}</ul>
}
