/** @jsx Yolk.createElement */

const todoStore = new TodoStore()
const filterStore = new FilterStore()
TodoActions.register(todoStore.updates)
FilterActions.register(filterStore.updates)

Yolk.render(<App todos={todoStore.todos} filter={filterStore.filter} />, document.querySelector('#container'))
