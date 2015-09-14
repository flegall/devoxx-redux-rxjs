let FilterActions = {
  set: new Rx.Subject(),
}

FilterActions.register = function (updates) {
  this.set.subscribe(updates)
}
