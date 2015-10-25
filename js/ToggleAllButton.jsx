function ToggleAllButton () {
  const handleChange = this.createEventHandler(null, true)
  const checked = handleChange.scan(acc => !acc, true)

  checked.skip(1).subscribe(Actions.toggleAllTodos)

  return <input className="toggle-all" type="checkbox" onChange={handleChange} checked={checked} />
}
