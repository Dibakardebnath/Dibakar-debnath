import { Auth, uploadTrack } from "./Actiontype"

const initialState={
    auth:false,
    trakerArray:[]
}

export const Reducer = (state=initialState,action)=>{

    switch(action.type){
        case Auth:{
         return {...state,auth:action.payload}
        }
        case uploadTrack:{
            return {...state,trakerArray:action.payload}
        }
        default:return state
    }
}