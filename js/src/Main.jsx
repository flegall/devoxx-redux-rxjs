/** @jsx yolk.createElement */

function Main (props) {
  const todos = props.map(p => p.todos)
  const filter = props.map(p => p.filter)

  return (
    <section className="main">
      <ToggleAllButton />
      <label for="toggle-all">Mark all as complete</label>
      <TodoList todos={todos} filter={filter} />
      <footer className="footer">
        <TodoCount todos={todos} />
        <FilterSelect filter={filter} />
        <CompleteButton />
      </footer>
    </section>
  )
}
