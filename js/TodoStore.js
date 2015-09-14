function TodoStore () {
  this.updates = new Rx.BehaviorSubject([])

  this.todos =
    this.updates
    .scan((todos, operation) => operation(todos))
    .shareReplay(1)
}
