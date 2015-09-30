function Main (props) {
  const {filter, todos} = props

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
