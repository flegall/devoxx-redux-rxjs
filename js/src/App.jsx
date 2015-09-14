/** @jsx yolk.createElement */

function App (props) {
  const todos = props.map(p => p.todos)
  const filter = props.map(p => p.filter)

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
