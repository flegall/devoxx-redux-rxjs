/** @jsx yolk.createElement */

"use strict";

function App(props) {
  var filter = props.filter;
  var todos = props.todos;

  return yolk.createElement(
    "div",
    null,
    yolk.createElement(
      "section",
      { className: "todoapp" },
      yolk.createElement(Header, null),
      yolk.createElement(Main, { todos: todos, filter: filter })
    ),
    yolk.createElement(Footer, null)
  );
}
/** @jsx yolk.createElement */

"use strict";

function CompleteButton() {
  var handleClear = yolk.createEventHandler();

  handleClear.subscribe(TodoActions.clearCompleted);

  return yolk.createElement(
    "button",
    { className: "clear-completed", onClick: handleClear },
    "Clear completed"
  );
}
"use strict";

var FilterActions = {
  set: new Rx.Subject()
};

FilterActions.register = function (updates) {
  this.set.subscribe(updates);
};
/** @jsx yolk.createElement */

'use strict';

function FilterSelect(props) {
  var filter = props.filter;

  var handleAll = yolk.createEventHandler();
  var handleActive = yolk.createEventHandler();
  var handleCompleted = yolk.createEventHandler();

  var all = handleAll.map(function () {
    return 'all';
  });
  var active = handleActive.map(function () {
    return 'active';
  });
  var completed = handleCompleted.map(function () {
    return 'completed';
  });
  all.merge(active).merge(completed).subscribe(FilterActions.set);

  var current = filter.map(function (f) {
    return f.type;
  });
  var isAll = current.map(function (c) {
    return c === 'all' ? 'selected' : '';
  }).startWith('');
  var isActive = current.map(function (c) {
    return c === 'active' ? 'selected' : '';
  }).startWith('');
  var isCompleted = current.map(function (c) {
    return c === 'completed' ? 'selected' : '';
  }).startWith('');

  return yolk.createElement(
    'ul',
    { className: 'filters' },
    yolk.createElement(
      'li',
      null,
      yolk.createElement(
        'a',
        { className: isAll, href: 'javascript:;', onClick: handleAll },
        'All'
      )
    ),
    yolk.createElement(
      'li',
      null,
      yolk.createElement(
        'a',
        { className: isActive, href: 'javascript:;', onClick: handleActive },
        'Active'
      )
    ),
    yolk.createElement(
      'li',
      null,
      yolk.createElement(
        'a',
        { className: isCompleted, href: 'javascript:;', onClick: handleCompleted },
        'Completed'
      )
    )
  );
}
'use strict';

function FilterStore() {
  var filters = {
    all: function all(todos) {
      return todos;
    },
    active: function active(todos) {
      return todos.filter(function (t) {
        return !t.completed;
      });
    },
    completed: function completed(todos) {
      return todos.filter(function (t) {
        return t.completed;
      });
    }
  };

  this.updates = new Rx.BehaviorSubject('all');
  this.filter = this.updates.map(function (type) {
    return { fn: filters[type], type: type };
  });
}
/** @jsx yolk.createElement */

"use strict";

function Footer() {
  return yolk.createElement(
    "footer",
    { className: "info" },
    yolk.createElement(
      "p",
      null,
      "Double-click to edit a todo"
    ),
    yolk.createElement(
      "p",
      null,
      "Template by ",
      yolk.createElement(
        "a",
        { href: "http://sindresorhus.com" },
        "Sindre Sorhus"
      )
    ),
    yolk.createElement(
      "p",
      null,
      "Created by ",
      yolk.createElement(
        "a",
        { href: "http://twitter.com/gabescholz" },
        "Gabe Scholz"
      )
    ),
    yolk.createElement(
      "p",
      null,
      "Part of ",
      yolk.createElement(
        "a",
        { href: "http://todomvc.com" },
        "TodoMVC"
      )
    )
  );
}
/** @jsx yolk.createElement */

'use strict';

function Header() {
  var handleSubmit = yolk.createEventHandler();
  var handleChange = yolk.createEventHandler();

  var reset = handleSubmit.map(function () {
    return '';
  });
  var value = handleChange.map(function (e) {
    return e.target.value;
  });
  var displayValue = value.merge(reset).startWith('');

  handleSubmit['do'](function (e) {
    return e.preventDefault();
  }).withLatestFrom(value, function (_, val) {
    return val;
  }).subscribe(TodoActions.add);

  return yolk.createElement(
    'header',
    { className: 'header' },
    yolk.createElement(
      'h1',
      null,
      'todos'
    ),
    yolk.createElement(
      'form',
      { onSubmit: handleSubmit },
      yolk.createElement('input', { className: 'new-todo', placeholder: 'What needs to be done?', autoFocus: true, onChange: handleChange, value: displayValue })
    )
  );
}
/** @jsx yolk.createElement */

"use strict";

function Main(props) {
  var filter = props.filter;
  var todos = props.todos;

  return yolk.createElement(
    "section",
    { className: "main" },
    yolk.createElement(ToggleAllButton, null),
    yolk.createElement(
      "label",
      { "for": "toggle-all" },
      "Mark all as complete"
    ),
    yolk.createElement(TodoList, { todos: todos, filter: filter }),
    yolk.createElement(
      "footer",
      { className: "footer" },
      yolk.createElement(TodoCount, { todos: todos }),
      yolk.createElement(FilterSelect, { filter: filter }),
      yolk.createElement(CompleteButton, null)
    )
  );
}
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Todo = (function () {
  function Todo(_ref) {
    var id = _ref.id;
    var label = _ref.label;
    var completed = _ref.completed;

    _classCallCheck(this, Todo);

    this.id = id || Math.random();
    this.label = label || '';
    this.completed = completed || false;
  }

  _createClass(Todo, [{
    key: 'toggleCompleted',
    value: function toggleCompleted() {
      this.completed = !this.completed;
      return this;
    }
  }]);

  return Todo;
})();
"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var TodoActions = {
  add: new Rx.Subject(),
  remove: new Rx.Subject(),
  clearCompleted: new Rx.Subject(),
  toggle: new Rx.Subject(),
  toggleAll: new Rx.Subject(),
  update: new Rx.Subject()
};

TodoActions.register = function (updates) {
  this.add.map(function (label) {
    var todo = new Todo({ label: label });
    return function (todos) {
      return [todo].concat(todos);
    };
  }).subscribe(updates);

  this.remove.map(function (todo) {
    return function (todos) {
      var index = todos.indexOf(todo);

      if (index > -1) {
        todos.splice(index, 1);
      }

      return todos;
    };
  }).subscribe(updates);

  this.clearCompleted.map(function () {
    return function (todos) {
      var length = todos.length;
      var newTodos = [];
      var i = -1;

      while (++i < length) {
        var todo = todos[i];

        if (!todo.completed) {
          newTodos.push(todo);
        }
      }

      return newTodos;
    };
  }).subscribe(updates);

  this.toggle.map(function (todo) {
    return function (todos) {
      todo.toggleCompleted();
      return todos;
    };
  }).subscribe(updates);

  this.toggleAll.map(function (bool) {
    return function (todos) {
      var length = todos.length;
      var i = -1;

      while (++i < length) {
        var todo = todos[i];
        todo.completed = bool;
      }

      return todos;
    };
  }).subscribe(updates);

  this.update.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var todo = _ref2[0];
    var label = _ref2[1];

    return function (todos) {
      todo.label = label;
      return todos;
    };
  }).subscribe(updates);
};
/** @jsx yolk.createElement */

"use strict";

function TodoCount(props) {
  var count = props.todos.flatMap(function (todos) {
    return Rx.Observable.from(todos).filter(function (todo) {
      return !todo.completed;
    }).scan(function (acc) {
      return acc + 1;
    }, 0).map(function (length) {
      return length === 1 ? "1 item left" : length + " items left";
    });
  });

  return yolk.createElement(
    "span",
    { className: "todo-count" },
    count
  );
}
/** @jsx yolk.createElement */

"use strict";

function TodoItem(props) {
  var todo = props.todo;

  var toggleComplete = yolk.createEventHandler();
  var handleRemove = yolk.createEventHandler();
  var handleInputChange = yolk.createEventHandler(function (ev) {
    return ev.target.value;
  });
  var handleEditStart = yolk.createEventHandler(function () {
    return true;
  });
  var handleEditEnd = yolk.createEventHandler(function () {
    return false;
  });

  var editing = handleEditStart.merge(handleEditEnd).startWith(false);
  var completed = todo.map(function (t) {
    return t.completed;
  });
  var label = todo.map(function (t) {
    return t.label;
  });

  var itemClassNames = Rx.Observable.combineLatest(completed, editing, function (completed, editing) {
    var classes = "";

    if (completed) {
      classes += " completed";
    }

    if (editing) {
      classes += " editing";
    }

    return classes;
  });

  toggleComplete.withLatestFrom(todo, function (_, t) {
    return t;
  }).subscribe(TodoActions.toggle);

  handleRemove.withLatestFrom(todo, function (_, t) {
    return t;
  }).subscribe(TodoActions.remove);

  handleEditEnd.withLatestFrom(todo, handleInputChange, function (_, todo, v) {
    return [todo, v];
  }).subscribe(TodoActions.update);

  return yolk.createElement(
    "li",
    { className: itemClassNames },
    yolk.createElement(
      "div",
      { className: "view" },
      yolk.createElement("input", { className: "toggle", type: "checkbox", checked: completed, onChange: toggleComplete }),
      yolk.createElement(
        "label",
        { onDblClick: handleEditStart },
        label
      ),
      yolk.createElement("button", { className: "destroy", onClick: handleRemove })
    ),
    yolk.createElement("input", { className: "edit", value: label, onBlur: handleEditEnd, onChange: handleInputChange })
  );
}
/** @jsx yolk.createElement */

"use strict";

function TodoList(props) {
  var todos = props.todos;
  var filter = props.filter;

  var todoItems = todos.combineLatest(filter, function (todos, filter) {
    return filter.fn(todos);
  }).flatMapLatest(function (todos) {
    return Rx.Observable.from(todos).reduce(function (acc, todo) {
      return acc.concat(yolk.createElement(TodoItem, { todo: todo, key: todo.id }));
    }, []);
  });

  return yolk.createElement(
    "ul",
    { className: "todo-list" },
    todoItems
  );
}
"use strict";

function TodoStore() {
  this.updates = new Rx.BehaviorSubject([]);

  this.todos = this.updates.scan(function (todos, operation) {
    return operation(todos);
  }).shareReplay(1);
}
/** @jsx yolk.createElement */

"use strict";

function ToggleAllButton() {
  var handleChange = yolk.createEventHandler(null, true);
  var checked = handleChange.scan(function (acc) {
    return !acc;
  }, true);

  checked.subscribe(TodoActions.toggleAll);

  return yolk.createElement("input", { className: "toggle-all", type: "checkbox", onChange: handleChange, checked: checked });
}
/** @jsx yolk.createElement */

'use strict';

var todoStore = new TodoStore();
var filterStore = new FilterStore();
TodoActions.register(todoStore.updates);
FilterActions.register(filterStore.updates);

yolk.render(yolk.createElement(App, { todos: todoStore.todos, filter: filterStore.filter }), document.querySelector('#container'));
