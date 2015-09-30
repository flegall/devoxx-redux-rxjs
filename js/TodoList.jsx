function TodoList (props) {
  const {todos, filter} = props

  const todoItems =
    todos
    .combineLatest(filter, (todos, filter) => filter.fn(todos))
    .flatMapLatest(todos => {
      return Rx.Observable.from(todos).map(todo => <TodoItem todo={todo} key={todo.id} />).toArray()
    })

  return <ul className="todo-list">{todoItems}</ul>
}
