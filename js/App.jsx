function App () {
  const state = new State()
  Actions.register(state.updates)

  return (
    <div>
      <section className="todoapp">
        <Header />
        <Main state={state.asObservable} />
      </section>
      <Footer />
    </div>
  );
}

Yolk.registerElement('todo-app', App)
