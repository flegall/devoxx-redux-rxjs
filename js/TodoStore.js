function TodoStore () {
  this.updates = new Rx.BehaviorSubject(Immutable.List())

  this.todos =
    this.updates
    .scan((todos, operation) => operation(todos))
    .shareReplay(1)
}
