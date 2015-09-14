/** @jsx yolk.createElement */

function FilterSelect (props) {
  const {filter} = props

  const handleAll = yolk.createEventHandler()
  const handleActive = yolk.createEventHandler()
  const handleCompleted = yolk.createEventHandler()

  const all = handleAll.map(() => 'all')
  const active = handleActive.map(() => 'active')
  const completed = handleCompleted.map(() => 'completed')
  all.merge(active).merge(completed).subscribe(FilterActions.set)

  const current = filter.map(f => f.type)
  const isAll = current.map(c => c === 'all' ? 'selected' : '').startWith('')
  const isActive = current.map(c => c === 'active' ? 'selected' : '').startWith('')
  const isCompleted = current.map(c => c === 'completed' ? 'selected' : '').startWith('')

  return (
    <ul className="filters">
      <li>
        <a className={isAll} href="javascript:;" onClick={handleAll}>All</a>
      </li>
      <li>
        <a className={isActive} href="javascript:;" onClick={handleActive}>Active</a>
      </li>
      <li>
        <a className={isCompleted} href="javascript:;" onClick={handleCompleted}>Completed</a>
      </li>
    </ul>
  )
}
