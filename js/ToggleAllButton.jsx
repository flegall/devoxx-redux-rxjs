import {h} from 'yolk'

import {Actions} from './Actions.js'

export function ToggleAllButton ({createEventHandler}) {
  const handleChange = createEventHandler(null, true)
  const checked = handleChange.scan(acc => !acc, true)

  checked.skip(1).subscribe(Actions.toggleAllTodos)

  return <input className="toggle-all" type="checkbox" onChange={handleChange} checked={checked} />
}
