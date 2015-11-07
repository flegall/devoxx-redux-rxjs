function State () {
  const initial = {
    todos: [],
    filter: `all`
  }

  this.updates = new Rx.BehaviorSubject(Immutable.fromJS(initial))
  this.asObservable = this.updates.scan((state, operation) => operation(state)).shareReplay(1)
}
