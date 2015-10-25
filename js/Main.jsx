function Main (props) {
  const {state} = props
  const todos = state.map(s => s.get(`todos`))
  const filter = state.map(s => s.get(`filter`))

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
