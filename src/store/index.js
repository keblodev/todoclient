import {
    createStore,
    compose,
    combineReducers,
    applyMiddleware,
}                               from 'redux';

import persistState             from 'redux-localstorage'
import thunk                    from 'redux-thunk';
import createBrowserHistory     from 'history/createBrowserHistory'

import rootReducer              from '../reducers';
import middleware               from '../middleware';
import { LOCAL_STORAGE_KEY } from '../constants/config';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    //todo: it lifts the state
    //and currently we monitor entire app state
    persistState(
        'app',
        {
            key: LOCAL_STORAGE_KEY
        }
    ),
    applyMiddleware(
        thunk,
        ...middleware,
    )
);

export function configureStore(initialState) {
    const store = createStore(
        combineReducers({
            app: rootReducer,
        }),
        initialState,
        enhancer
    );

    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers').default)
        );
    }

    return store;
}