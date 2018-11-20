import * as appActions from '../constants/ActionTypes'

export const completeTodo = id => ({ type: appActions.COMPLETE_TODO, id })
export const completeAllTodos = () => ({ type: appActions.COMPLETE_ALL_TODOS })
export const clearCompleted = () => ({ type: appActions.CLEAR_COMPLETED })
export const setVisibilityFilter = filter => ({ type: appActions.SET_VISIBILITY_FILTER, filter})

export const todoAdd = data => dispatch => {
  dispatch( { type: appActions.ADD_TODO, data } )
}

export const todoEdit = ( data ) => dispatch => {
  dispatch( { type: appActions.EDIT_TODO, data } )
}

export const todoDelete = id => dispatch => {
  dispatch( { type: appActions.DELETE_TODO, id } )
}

export const todosFetch = data => dispatch => {
  dispatch( { type: appActions.GOT_TODOS, data })
}

export const getTodos = () => ( { type: appActions.GET_TODOS } );

export const addTodo = text => ({ type: appActions.POST_TODO, text });

export const editTodo = ( value, id ) => dispatch => {
  const data = {
    ...value
  }

  fetch( `http://localhost:8000/1/todos/${ id }`, data ).then( response => {
    dispatch( todoEdit( response.data ) )
  } )
}

export const deleteTodo = id => dispatch => {
  fetch( `http://localhost:8000/1/todos/${ id }`, {method: "DELETE"} ).then( response => {
    dispatch( todoDelete( id ) )
  } )
}
