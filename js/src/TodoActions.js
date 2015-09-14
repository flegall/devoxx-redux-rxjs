let TodoActions = {
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
      const todo = new Todo({label})
      return todos => ([todo]).concat(todos)
    })
    .subscribe(updates)

  this.remove
    .map(todo => {
      return todos => {
        const index = todos.indexOf(todo)

        if (index > -1) {
          todos.splice(index, 1)
        }

        return todos
      }
    })
    .subscribe(updates)

  this.clearCompleted
    .map(() => {
      return todos => {
        const length = todos.length
        let newTodos = []
        let i = -1

        while(++i < length) {
          const todo = todos[i]

          if (!todo.completed) {
            newTodos.push(todo)
          }
        }

        return newTodos
      }
    })
    .subscribe(updates)

  this.toggle
    .map(todo => {
      return todos => {
        todo.toggleCompleted()
        return todos
      }
    })
    .subscribe(updates)

  this.toggleAll
    .map(bool => {
      return todos => {
        const length = todos.length
        let i = -1

        while(++i < length) {
          const todo = todos[i]
          todo.completed = bool
        }

        return todos
      }
    })
    .subscribe(updates)

  this.update
    .map(([todo, label]) => {
      return todos => {
        todo.label = label
        return todos
      }
    })
    .subscribe(updates)
}
