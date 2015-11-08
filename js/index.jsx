const state = new State()
Actions.register(state.updates)

Yolk.render(
  <App state={state.asObservable} />,
  document.querySelector('#container')
)
