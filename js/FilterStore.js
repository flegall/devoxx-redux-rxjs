function FilterStore () {
  const filters = {
    all (todos) { return todos },
    active (todos) { return todos.filter(t => !t.get('completed')) },
    completed (todos) { return todos.filter(t => t.get('completed')) }
  }

  this.updates = new Rx.BehaviorSubject('all')
  this.filter = this.updates.map(type => ({fn: filters[type], type}))
}
