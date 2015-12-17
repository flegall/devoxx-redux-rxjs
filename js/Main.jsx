import {h} from 'yolk'

import {ToggleAllButton} from './ToggleAllButton.jsx'
import {TodoList} from './TodoList.jsx'
import {TodoCount} from './TodoCount.jsx'
import {FilterSelect} from './FilterSelect.jsx'
import {CompleteButton} from './CompleteButton.jsx'

export function Main ({props}) {
  const {todos, filter} = props

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
