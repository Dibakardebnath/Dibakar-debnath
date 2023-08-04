import {applyMiddleware, legacy_createStore as  createStore} from 'redux'
import thunk from 'redux-thunk'
import { Reducer } from './Reducer'

export const store =createStore(Reducer,applyMiddleware(thunk))

// store.subscribe(()=>{
//     console.log(store.getState().auth)
// })