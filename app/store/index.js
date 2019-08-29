// import {createStore } from 'redux'
import rootReducer from '../reducers'
// const rootReducer = () => {

// }
import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from "redux-saga";
import { watchtakenote, watchtakennote2, watchtakennote3 } from '../actions/saga';

const sagaMiddleware=createSagaMiddleware();

export default store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

 sagaMiddleware.run(watchtakenote)
 sagaMiddleware.run(watchtakennote2)
 sagaMiddleware.run(watchtakennote3)