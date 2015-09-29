/** @jsx Yolk.createElement */

function FilterSelect (props) {
  const {filter} = props

  const handleAll = this.createEventHandler('all')
  const handleActive = this.createEventHandler('active')
  const handleCompleted = this.createEventHandler('completed')

  handleAll.merge(handleActive).merge(handleCompleted).subscribe(FilterActions.set)

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
