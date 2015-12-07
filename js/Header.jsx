function Header ({createEventHandler}) {
  const handleSubmit = createEventHandler(ev => ev.preventDefault())
  const handleChange = createEventHandler(ev => ev.target.value)
  const displayValue = new Rx.BehaviorSubject('')

  handleSubmit
    .withLatestFrom(displayValue, (_, val) => val)
    .filter(val => val.length > 0)
    .subscribe(Actions.addTodo)

  handleChange.subscribe(displayValue)
  handleSubmit.map(() => '').subscribe(displayValue)

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} onChange={handleChange} value={displayValue} />
      </form>
    </header>
  )
}
