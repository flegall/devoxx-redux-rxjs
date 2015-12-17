import {h} from 'yolk'

import {Header} from './Header.jsx'
import {Main} from './Main.jsx'
import {Footer} from './Footer.jsx'

export function App ({props}) {
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
