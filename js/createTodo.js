function createTodo (label = '', completed = false) {
  return Immutable.fromJS({id: Math.random(), label, completed})
}
