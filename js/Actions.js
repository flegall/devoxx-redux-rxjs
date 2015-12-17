import Rx from 'rx'

import {createTodo} from './createTodo'

export const Actions = {
  setFilter: new Rx.Subject(),
  addTodo: new Rx.Subject(),
  removeTodo: new Rx.Subject(),
  clearCompletedTodos: new Rx.Subject(),
  toggleTodo: new Rx.Subject(),
  toggleAllTodos: new Rx.Subject(),
  updateTodo: new Rx.Subject()
}

Actions.register = function (updates) {
  this.setFilter
    .map(type => {
      return state => state.set(`filter`, type)
    })
    .subscribe(updates)

  this.addTodo
    .map(label => {
      const todo = createTodo(label)
      return state => {
        return state.update(`todos`, todos => todos.unshift(todo))
      }
    })
    .subscribe(updates)

  this.removeTodo
    .map(todo => {
      return state => {
        return state.update(`todos`, todos => {
          const index = todos.indexOf(todo)
          return todos.remove(index)
        })
      }
    })
    .subscribe(updates)

  this.clearCompletedTodos
    .map(() => {
      return state => {
        return state.update(`todos`, todos => todos.filter(todo => !todo.get(`completed`)))
      }
    })
    .subscribe(updates)

  this.toggleTodo
    .map(todo => {
      return state => {
        return state.update(`todos`, todos => {
          const index = todos.indexOf(todo)
          const _todo = todo.update(`completed`, false, function (bool) { return !bool })
          return todos.set(index, _todo)
        })
      }
    })
    .subscribe(updates)

  this.toggleAllTodos
    .map(bool => {
      return state => {
        return state.update(`todos`, todos => todos.map(todo => todo.set(`completed`, bool)))
      }
    })
    .subscribe(updates)

  this.updateTodo
    .map(([todo, label]) => {
      return state => {
        return state.update(`todos`, todos => {
          const index = todos.indexOf(todo)
          return todos.set(index, todo.set(`label`, label))
        })
      }
    })
    .subscribe(updates)
}
