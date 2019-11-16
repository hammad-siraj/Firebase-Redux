import {createStore,combineReducers, applyMiddleware} from 'redux';
import { Reducer } from './reducer';
import thunk from 'redux-thunk'

const middleware =[thunk]

export const configureStore =()=>{
    const store =createStore(
        combineReducers({
            FetchedTodos:Reducer
        }),applyMiddleware(...middleware)
    )
    return store;
}