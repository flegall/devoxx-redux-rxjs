/** @jsx yolk.createElement */

function Header () {
  const handleSubmit = yolk.createEventHandler()
  const handleChange = yolk.createEventHandler()

  const reset = handleSubmit.map(() => '')
  const value = handleChange.map(e => e.target.value)
  const displayValue = value.merge(reset).startWith('')

  handleSubmit
    .do(e => e.preventDefault())
    .withLatestFrom(value, (_, val) => val)
    .subscribe(TodoActions.add)

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus onChange={handleChange} value={displayValue} />
      </form>
    </header>
  )
}
