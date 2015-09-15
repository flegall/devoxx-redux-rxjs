/** @jsx yolk.createElement */

function Header () {
  const handleSubmit = yolk.createEventHandler()
  const handleChange = yolk.createEventHandler(ev => ev.target.value)

  const reset = handleSubmit.map(() => '')
  const displayValue = handleChange.merge(reset).startWith('')

  handleSubmit
    .do(e => e.preventDefault())
    .withLatestFrom(handleChange, (_, val) => val)
    .filter(val => val.length > 0)
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
