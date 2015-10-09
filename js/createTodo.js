function createTodo (label = '', completed = false) {
  return Immutable.Map({id: Math.random(), label, completed})
}
