import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: types.ADD_TODO,
      text: 'Use Redux'
    })
  })

  it('deleteTodo should create DELETE_TODO action', () => {
    expect(actions.deleteTodo(1)).toEqual({
      type: types.DELETE_TODO,
      id: 1
    })
  })

  it('editTodo should create TODO_UPDATED action', () => {
    expect(actions.updateTodo({id:1, text:'Use Redux everywhere'})).toEqual({
      type: types.TODO_UPDATED,
      id: 1,
      text: 'Use Redux everywhere'
    })
  })

  it('completeTodo should create TOGGLE_COMPLETE_TODO action', () => {
    expect(actions.updateTodo({id: 1, isCompleted: true})).toEqual({
      type: types.TOGGLE_COMPLETE_TODO,
      id: 1,
      data: {isCompleted: true}
    })
  })

  it('completeAll should create COMPLETE_ALL action', () => {
    expect(actions.completeAllTodos()).toEqual({
      type: types.COMPLETE_ALL_TODOS
    })
  })

  it('clearCompleted should create CLEAR_COMPLETED action', () => {
    expect(actions.clearCompleted()).toEqual({
      type: types.CLEAR_COMPLETED
    })
  })
})
