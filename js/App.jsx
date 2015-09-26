/** @jsx Yolk.createElement */

function App (props) {
  const {filter, todos} = props

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
