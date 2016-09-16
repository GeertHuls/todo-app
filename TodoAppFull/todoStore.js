import { createStore } from 'redux';

const defaultState = {
  todos: [
    {
      task:'Initial todo in store'
    }
  ]
}

function todoStore(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: state.todos.concat([{
          task: actions.task
        }])
      });
    default:
      return state;
  }
}

export default createStore(todoStore);
