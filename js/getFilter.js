export function getFilterFunction (type) {
  switch (type) {
    case `all`:
      return todos => todos
    case `active`:
      return todos => todos.filter(t => !t.get(`completed`))
    case `completed`:
      return todos => todos.filter(t => t.get(`completed`))
  }
}
