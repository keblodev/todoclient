import * as appActions  from '../constants/ActionTypes'

const initialState = [
  {
    text: 'Use Redux',
    isCompleted: false,
    id: 0
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case appActions.GOT_TODOS:
      return [
        ...action.data,
      ]
    case appActions.ADD_TODO:
      return [
        ...state,
        {
          id: action.data.id,
          isCompleted: action.data.isCompleted,
          text: action.data.text
        }
      ]

    case appActions.DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case appActions.EDITING_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, ...action.data } :
          todo
      )

    case appActions.TODO_UPDATED:
      return state.map(todo =>
        todo.id === action.data.id ?
          { ...todo, ...action.data } :
          todo
      )

    case appActions.OPTIMIST_COMPLETE_ALL_TODOS:
      const areAllMarked = state.every(todo => todo.isCompleted)
      return state.map(todo => ({
        ...todo,
        isCompleted: !areAllMarked
      }))

    default:
      return state
  }
}
