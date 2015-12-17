import {h} from 'yolk'

export function TodoCount ({props}) {
  const count = props.todos.map(todos => {
    const length = todos.count(todo => !todo.get(`completed`))

    return (length === 1) ? `1 item left` : `${length} items left`
  })

  return <span className="todo-count">{count}</span>
}
