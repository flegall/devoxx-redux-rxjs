class Todo {
  constructor ({id, label, completed}) {
    this.id = id || Math.random()
    this.label = label || ''
    this.completed = completed || false
  }

  toggleCompleted () {
    this.completed = !this.completed
    return this
  }
}
