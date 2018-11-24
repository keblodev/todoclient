import axios             from 'axios';
import * as appActions   from '../../constants/ActionTypes';
import * as actions      from '../../actions';

import {BASE_API_URL , AUTH_TOKEN} from '../../constants/config'

export default store => next => action => {
    Promise.resolve().then(_ => {
        // const state         = store.getState();
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