import axios             from 'axios';
import * as appActions   from '../../constants/ActionTypes';
import * as actions      from '../../actions';

export default store => next => action => {
    Promise.resolve().then(_ => {
        // const state         = store.getState();
        const dispatch      = store.dispatch;

        switch(action.type) {
            case appActions.POST_TODO: {
              axios.post( 'http://localhost:8000/1/todos',
              { text: action.text } )
              .then( response => {
                console.log(response);
                dispatch(actions.todoAdd( response.data ));
              });

              break;
            }
            case appActions.GET_TODOS: {
              axios.get( 'http://localhost:8000/1/todos')
              .then( response => {
                console.log(response);
                dispatch(actions.todosFetch( response.data ));
              });

              break;
            }
            default:
              break;
        }
    });

    return next(action);
};