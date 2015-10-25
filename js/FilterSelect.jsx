function FilterSelect (props) {
  const {filter} = props

  const handleAll = this.createEventHandler('all')
  const handleActive = this.createEventHandler('active')
  const handleCompleted = this.createEventHandler('completed')

  handleAll.merge(handleActive).merge(handleCompleted).subscribe(Actions.setFilter)

  const isAll = filter.map(f => f === 'all' ? 'selected' : '').startWith('')
  const isActive = filter.map(f => f === 'active' ? 'selected' : '').startWith('')
  const isCompleted = filter.map(f => f === 'completed' ? 'selected' : '').startWith('')

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
