import * as appActions from '../constants/ActionTypes'

export const setVisibilityFilter = filter => ({ type: appActions.SET_VISIBILITY_FILTER, filter})

export const completeAllTodos = () => ({ type: appActions.COMPLETE_ALL_TODOS });

export const clearCompleted = () => ({ type: appActions.DELETING_TODOS });

export const todoEdit = data => ({ type: appActions.TODO_UPDATED, data });
export const updateTodo = ({id, ...data}) => ( { type: appActions.EDITING_TODO, data, id });

export const todosGot = data => ({ type: appActions.GOT_TODOS, data });
export const getTodos = () => ({ type: appActions.GET_TODOS });

export const todoAdd = data => ({ type: appActions.ADD_TODO, data });
export const addTodo = text => ({ type: appActions.POST_TODO, text });

export const todoDelete = id => ({ type: appActions.DELETE_TODO, id })
export const deleteTodo = id => ({ type: appActions.DELETING_TODO, id });
