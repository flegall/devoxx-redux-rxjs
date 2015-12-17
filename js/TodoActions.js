import {createTodo} from './createTodo'

export let TodoActions = {
  add: new Rx.Subject(),
  remove: new Rx.Subject(),
  clearCompleted: new Rx.Subject(),
  toggle: new Rx.Subject(),
  toggleAll: new Rx.Subject(),
  update: new Rx.Subject()
}

TodoActions.register = function (updates) {
  this.add
    .map(label => {
      const todo = createTodo(label)
      return todos => todos.unshift(todo)
    })
    .subscribe(updates)

  this.remove
    .map(todo => {
      return todos => {
        const index = todos.indexOf(todo)
        return todos.remove(index)
      }
    })
    .subscribe(updates)

  this.clearCompleted
    .map(() => {
      return todos => {
        return todos.filter(todo => !todo.get(`completed`))
      }
    })
    .subscribe(updates)

  this.toggle
    .map(todo => {
      return todos => {
        const index = todos.indexOf(todo)
        const _todo = todo.update('completed', false, function (bool) { return !bool })
        return todos.set(index, _todo)
      }
    })
    .subscribe(updates)

  this.toggleAll
    .map(bool => {
      return todos => {
        return todos.map(todo => todo.set('completed', bool))
      }
    })
    .subscribe(updates)

  this.update
    .map(([todo, label]) => {
      return todos => {
        const index = todos.indexOf(todo)
        return todos.set(index, todo.set('label', label))
      }
    })
    .subscribe(updates)
}
