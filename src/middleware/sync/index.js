import axios             from 'axios';
import * as appActions   from '../../constants/ActionTypes';
import * as actions      from '../../actions';

import {BASE_API_URL , AUTH_TOKEN} from '../../constants/config'

export default store => next => action => {
    Promise.resolve().then(_ => {
        const state         = store.getState();
        const dispatch      = store.dispatch;

        switch(action.type) {
            case appActions.POST_TODO: {
              axios.post( `${BASE_API_URL}/1/todos`,
              { text: action.text }, {
                headers: {
                  "Authorization": `Bearer ${AUTH_TOKEN}`,
                  "Content-Type": "application/json"
                }
              } )
              .then( response => {
                console.log(response);
                dispatch(actions.todoAdd( response.data ));
              });

              break;
            }
            case appActions.GET_TODOS: {
              axios.get( `${BASE_API_URL}/1/todos` ,
              {
                headers: {
                  "Authorization": `Bearer ${AUTH_TOKEN}`
                }
              })
              .then( response => {
                console.log(response);
                dispatch(actions.todosGot( response.data ));
              });

              break;
            }

            case appActions.DELETING_TODO: {
              const {id} = action;
              axios.delete( `${BASE_API_URL}/1/todos/${id}` ,
              {
                headers: {
                  "Authorization": `Bearer ${AUTH_TOKEN}`
                }
              })
              .then( response => {

                console.log(response);
                dispatch(actions.todoDelete( id ));
              });

              break;
            }

            case appActions.DELETING_TODOS: {
              const todosToDelete = state.app.todos
                .filter(todo => todo.isCompleted !== false)
                .map(todo => todo.id)

              axios.delete(`${BASE_API_URL}/1/todos?todoIds=${todosToDelete.join(',')}` ,
              {
                headers: {
                  "Authorization": `Bearer ${AUTH_TOKEN}`
                }
              })
              .then( response => {
                console.log(response);
                dispatch(actions.todosGot(response.data));
              });

              break;
            }

            case appActions.EDITING_TODO: {
              const {data, id} = action;
              axios.put( `${BASE_API_URL}/1/todos/${id}` ,
              data,
              {
                headers: {
                  "Authorization": `Bearer ${AUTH_TOKEN}`
                }
              })
              .then( response => {
                console.log(response);
                dispatch(actions.todoEdit(response.data));
              });

              break;
            }

            case appActions.COMPLETE_ALL_TODOS: {
              const areAllMarked = state.app
                .todos.every(todo => todo.isCompleted);

              axios.put( `${BASE_API_URL}/1/todos` ,
              {isCompleted: !areAllMarked},
              {
                headers: {
                  "Authorization": `Bearer ${AUTH_TOKEN}`
                }
              })
              .then( response => {
                console.log(response);
                dispatch(actions.todosGot(response.data));
              });

              break;
            }

            default:
              break;
        }
    });

    return next(action);
};