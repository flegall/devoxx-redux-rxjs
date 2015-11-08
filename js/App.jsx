function App (props) {
  const {state} = props
  const todos = state.map(s => s.get(`todos`))
  const filter = state.map(s => s.get(`filter`))

  return (
    <div>
      <section className="todoapp">
        <Header />
        <Main todos={todos} filter={filter} />
      </section>
      <Footer />
    </div>
  );
}
