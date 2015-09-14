/** @jsx yolk.createElement */

const todoStore = new TodoStore()
const filterStore = new FilterStore()
TodoActions.register(todoStore.updates)
FilterActions.register(filterStore.updates)

yolk.render(<App todos={todoStore.todos} filter={filterStore.filter} />, document.querySelector('#container'))
