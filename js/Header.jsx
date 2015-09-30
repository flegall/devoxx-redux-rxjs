function Header () {
  const handleSubmit = this.createEventHandler(ev => ev.preventDefault())
  const handleChange = this.createEventHandler(ev => ev.target.value)
  const displayValue = new Rx.BehaviorSubject('')

  handleSubmit
    .withLatestFrom(displayValue, (_, val) => val)
    .filter(val => val.length > 0)
    .subscribe(TodoActions.add)

  handleChange.subscribe(displayValue)
  handleSubmit.map(() => '').subscribe(displayValue)

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus onChange={handleChange} value={displayValue} />
      </form>
    </header>
  )
}
